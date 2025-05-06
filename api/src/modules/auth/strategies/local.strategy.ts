import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserRepository } from '../../../database/repositories/user.repository';
import { InvalidEntityIdException } from '../../../common/exceptions/invalid-entity-id.exception';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor (private readonly userRepository: UserRepository) {
    super({
      usernameField: 'email'
    });
  }

  async validate (email: string, password: string) {
    const user = await this.userRepository.findOne({ email });

    if (!user) throw new InvalidEntityIdException('User');
    await this.validatePassword(password, user.password as string);
    delete user.password;
    return user;
  }

  private async validatePassword (password: string, hash: string) {
    const matches = await bcrypt.compare(password, hash);
    if (!matches) throw new UnauthorizedException('The password is incorrect');
  }
}
