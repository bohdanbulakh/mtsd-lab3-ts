import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { AccessStrategy } from './strategies/access.strategy';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { RefreshStrategy } from './strategies/refresh.strategy';

@Module({
  imports: [
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    JwtService,
    AuthService,
    LocalStrategy,
    AccessStrategy,
    RefreshStrategy,
  ],
})
export class AuthModule {}
