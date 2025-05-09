import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../database/repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AlreadyRegisteredException } from '../../common/exceptions/already-registered.exception';
import { UserEntity } from '../../database/entities/user.entity';
import { JwtPayload } from './types/jwt.payload';
import * as process from 'node:process';
import { RegisterDTO } from '@mtsd-lab3/utils';

@Injectable()
export class AuthService {
  constructor (
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async register (data: RegisterDTO) {
    if (await this.checkIfUserIsRegistered(data)) {
      throw new AlreadyRegisteredException();
    }

    data.password = await this.hashPassword(data.password);
    await this.userRepository.create(data);
  }


  login (user: UserEntity) {
    const payload = this.createPayload(user);
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: process.env['ACCESS_TTL'] ?? '7d',
      secret: process.env['ACCESS_SECRET'],
    });

    return { accessToken };
  }

  getTokenExpTime (token: string) {
    return this.jwtService.decode(token).exp * 1000;
  }

  private async checkIfUserIsRegistered (query: { email?: string, username?: string }) {
    const user = await this.userRepository.findOne({
      OR: [
        { email: query.email },
      ],
    });
    return !!user?.password;
  }

  private async hashPassword (password: string) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }

  private createPayload ({ email: sub }: UserEntity): JwtPayload {
    return { sub };
  }

  async me (email: string) {
    const user = await  this.userRepository.findById(email);
    delete user.password;
    return user;
  }
}
