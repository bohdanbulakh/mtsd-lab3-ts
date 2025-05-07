import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { message } from '../validation.util';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDTO {
  @ApiProperty({ description: 'Product\'s name' })
  @IsNotEmpty(message.notEmpty('Name'))
  @IsString(message.ofType('Name', 'a string'))
    name: string;

  @ApiPropertyOptional({ description: 'Product\'s icon' })
  @IsString(message.ofType('Icon', 'a string'))
  @IsOptional()
    icon?: string;

  @ApiProperty({ description: 'Product\'s price' })
  @IsNotEmpty(message.notEmpty('Price'))
  @IsNumber({}, message.ofType('Price', 'a number'))
    price: number;

  @ApiPropertyOptional({ description: 'Product\'s description' })
  @IsString(message.ofType('Description', 'a string'))
  @IsOptional()
    description?: string;
}
