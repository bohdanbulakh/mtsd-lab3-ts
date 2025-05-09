import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CookieUtils } from '../../common/utils/request.utils';
import { GetUser } from '../../common/decorators/get-user.decorator';
import { UserEntity } from '../../database/entities/user.entity';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LocalGuard } from '../../common/guards/auth/local.guard';
import { ApiEndpoint } from 'src/common/decorators/api-endpoint.decorator';
import { RegisterDTO } from '@mtsd-lab3/utils';
import { AuthDocumentation } from '../../common/documentation/modules/auth';
import { AccessGuard } from '../../common/guards/auth/access.guard';

@Controller('auth')
export class AuthController {
  constructor (private readonly authService: AuthService) {}

  @Post('/register')
  @ApiEndpoint({
    summary: 'Register a user',
    documentation: AuthDocumentation.REGISTER,
  })
  async register (
    @Body() data: RegisterDTO,
  ) {
    return this.authService.register(data);
  }

  @Post('/login')
  @ApiEndpoint({
    summary: 'Login',
    guards: LocalGuard,
    documentation: AuthDocumentation.LOGIN,
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
    guards: AccessGuard,
    documentation: AuthDocumentation.LOGOUT,
  })
  logout (
    @Res({ passthrough: true }) response: Response,
  ) {
    CookieUtils.clearResponseCookie(response);
  }

  @Get('/me')
  @ApiEndpoint({
    summary: 'Get user info',
    guards: AccessGuard,
    documentation: AuthDocumentation.ME,
  })
  me (
    @GetUser('email') email: string,
  ) {
    return this.authService.me(email);
  }
}
