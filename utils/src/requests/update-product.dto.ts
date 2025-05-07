import { IsNumber, IsOptional, IsString } from 'class-validator';
import { message } from '../validation.util';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDTO {
  @ApiPropertyOptional({ description: 'Product\'s name' })
  @IsString(message.ofType('Name', 'a string'))
  @IsOptional()
    name?: string;

  @ApiPropertyOptional({ description: 'Product\'s icon' })
  @IsString(message.ofType('Icon', 'a string'))
  @IsOptional()
    icon?: string;

  @ApiPropertyOptional({ description: 'Product\'s price' })
  @IsNumber({}, message.ofType('Price', 'a number'))
  @IsOptional()
    price?: number;

  @ApiPropertyOptional({ description: 'Product\'s description' })
  @IsString(message.ofType('Description', 'a string'))
  @IsOptional()
    description?: string;
}
