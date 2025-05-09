import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({ description: 'Email of the user'})
    email: string;

  @ApiProperty({ description: 'First name of the user'})
    firstName: string;

  @ApiProperty({ description: 'Last name of the user'})
    lastName: string;
}
