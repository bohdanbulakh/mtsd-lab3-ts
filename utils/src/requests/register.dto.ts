import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { UKR_REGEX, UKRSPEC_REGEX, message } from '../validation.util';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDTO {
  @ApiProperty({ description: 'User\'s email in the application'})
  @IsNotEmpty(message.notEmpty('Email'))
  @IsEmail({}, message.ofType('Email', 'an email'))
    email: string;

  @ApiProperty({ description: 'User\'s password to access account' })
  @Matches(
    new RegExp(/^(?=.*[A-Za-z])(?=.*\d).{6,32}$/),
    message.custom('The password must be between 6 and 32 characters long, include at least 1 digit and 1 latin letter'))
  @IsNotEmpty(message.notEmpty('Password'))
  @IsString(message.ofType('Password', 'a string'))
    password: string;

  @ApiProperty({ description: 'User\'s first name in the application' })
  @Matches(
    new RegExp('.{2,40}$'),
    message.custom('First name is too short (min: 2) or too long (max: 40)'))
  @IsNotEmpty(message.notEmpty('First name'))
  @IsString(message.ofType('First name', 'a string'))
    firstName: string;

  @ApiProperty({ description: 'User\'s last name in the application' })
  @Matches(
    new RegExp('.{2,40}$'),
    message.custom('First name is too short (min: 2) or too long (max: 40)'))
  @IsNotEmpty(message.notEmpty('Last name'))
  @IsString(message.ofType('Last name', 'string'))
    lastName: string;
}
