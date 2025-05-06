import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { AccessStrategy } from './access.strategy';
import { CookieUtils } from '../../../common/utils/request.utils';
import { JwtPayload } from '../types/jwt.payload';
import { SecurityConfigService } from '../../../config/security-config.service';
import { UserWithToken } from '../types/user-with-token.type';
import { RefreshTokenRepository } from 'src/database/repositories/refresh-token.repository';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  constructor (
    private readonly accessStrategy: AccessStrategy,
    private readonly refreshTokenRepository: RefreshTokenRepository,
    configService: SecurityConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors(CookieUtils.getRequestJwt('refresh')),
      secretOrKey: configService.refreshSecret,
      ignoreExpiration: false,
      passReqToCallback: true,
    });
  }

  async validate (req: Request, payload: JwtPayload): Promise<UserWithToken> {
    const user = await this.accessStrategy.validate(payload);
    const rt = CookieUtils.getRequestJwt('refresh')[0](req);

    const token = await this.refreshTokenRepository.findOne({
      userId: user.id,
      token: rt,
    });

    if (!token) throw new UnauthorizedException();
    return {
      ...user,
      token,
    };
  }
}
