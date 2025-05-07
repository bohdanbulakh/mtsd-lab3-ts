import { ApiProperty } from '@nestjs/swagger';
import { ProductResponse } from './product.response';

export class ProductsResponse {
  @ApiProperty({
    description: 'Products',
    type: [ProductResponse],
  })
    products: ProductResponse[];
}
