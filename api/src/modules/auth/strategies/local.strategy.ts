import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserRepository } from '../../../database/repositories/user.repository';
import { InvalidEntityIdException } from '../../../common/exceptions/invalid-entity-id.exception';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor (private readonly userRepository: UserRepository) {
    super();
  }

  async validate (username: string, password: string) {
    const user = await this.userRepository.findOne({
      OR: [
        { username },
        { email: username },
      ],
    });

    if (!user) throw new InvalidEntityIdException('User');
    await this.validatePassword(password, user.password);
    user.password = null;
    return user;
  }

  private async validatePassword (password: string, hash: string) {
    const matches = await bcrypt.compare(password, hash);
    if (!matches) throw new UnauthorizedException('The password is incorrect');
  }
}
