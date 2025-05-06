import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from '../../../database/repositories/user.repository';
import { InvalidEntityIdException } from '../../../common/exceptions/invalid-entity-id.exception';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from '../types/jwt.payload';
import { CookieUtils } from '../../../common/utils/request.utils';
import { UserEntity } from '../../../database/entities/user.entity';
import { SecurityConfigService } from '../../../config/security-config.service';

@Injectable()
export class AccessStrategy extends PassportStrategy(Strategy) {
  constructor (
    private readonly userRepository: UserRepository,
    configService: SecurityConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors(CookieUtils.getRequestJwt('access')),
      secretOrKey: configService.accessSecret,
      ignoreExpiration: false,
    });
  }

  async validate (payload: JwtPayload): Promise<UserEntity> {
    if (!payload) throw new UnauthorizedException();

    const user = await this.userRepository.findById(payload.sub);
    if (!user) throw new InvalidEntityIdException('User');

    user.password = null;
    return user;
  }
}
