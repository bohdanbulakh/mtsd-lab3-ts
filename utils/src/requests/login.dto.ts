import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import {
  message,
} from '../validation.util';

export class LoginDTO {
  @ApiProperty({ description: 'User\'s email in the application'})
  @IsNotEmpty(message.notEmpty('Email'))
  @IsEmail({}, message.ofType('Email', 'an email'))
    email: string;

  @ApiProperty({
    description: 'User\'s password to access account',
  })
  @Matches(
    new RegExp(/^(?=.*[A-Za-z])(?=.*\d).{6,32}$/),
    message.custom('The password must be between 6 and 32 characters long, include at least 1 digit and 1 latin letter'))
  @IsNotEmpty(message.notEmpty('Password cannot be empty'))
  @IsString(message.ofType('Password', 'a string'))
    password: string;
}
