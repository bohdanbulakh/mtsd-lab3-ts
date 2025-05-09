import { ApiProperty } from '@nestjs/swagger';
import { ShortProductResponse } from './short-product.response';

export class ProductsResponse {
  @ApiProperty({
    description: 'Products',
    type: [ShortProductResponse],
  })
    products: ShortProductResponse[];
}
