import { ApiProperty } from "@nestjs/swagger";
import { ShortProductResponse } from './short-product.response';

export class ProductResponse extends ShortProductResponse {
  @ApiProperty({ description: 'Product description' })
    description: string | null;
}
