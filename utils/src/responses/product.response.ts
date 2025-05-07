import { ApiProperty } from "@nestjs/swagger";

export class ProductResponse {
  @ApiProperty({ description: 'Product id' })
    id: string;

  @ApiProperty({ description: 'Product name' })
    name: string;

  @ApiProperty({ description: 'Product icon' })
    icon: string;

  @ApiProperty({ description: 'Product price' })
    price: number;

  @ApiProperty({ description: 'Product description' })
    description: string | null;
}
