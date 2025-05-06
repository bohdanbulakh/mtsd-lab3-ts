import { Body, Controller, Post, Res } from '@nestjs/common';
import { CookieUtils } from '../../common/utils/request.utils';
import { GetUser } from '../../common/decorators/get-user.decorator';
import { UserEntity } from '../../database/entities/user.entity';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LocalGuard } from '../../common/guards/auth/local.guard';
import { ApiEndpoint } from 'src/common/decorators/api-endpoint.decorator';

@Controller('auth')
export class AuthController {
  constructor (private readonly authService: AuthService) {}

  @Post('/register')
  @ApiEndpoint({
    summary: 'Register a user',
  })
  async register (
    @Body() data: any,
  ) {
    return this.authService.register(data);
  }

  @Post('/login')
  @ApiEndpoint({
    summary: 'Login',
    guards: LocalGuard,
  })
  @Post('/login')
  login (
    @GetUser() user: UserEntity,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { accessToken } = this.authService.login(user);
    CookieUtils.setResponseJwt(response, accessToken, {
      accessExpires: this.authService.getTokenExpTime(accessToken),
    });
  }

  @Post('/logout')
  @ApiEndpoint({
    summary: 'Logout',
  })
  logout (
    @Res({ passthrough: true }) response: Response,
  ) {
    CookieUtils.clearResponseCookie(response);
  }
}
