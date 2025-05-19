import { ProductResponse } from "./product.response";
import { ApiProperty } from "@nestjs/swagger";

export class OrderResponse {
  @ApiProperty({ description: "Order id" })
    id: string;

  @ApiProperty({ description: "Whether order is finished" })
    finished: boolean;

  @ApiProperty({ description: "Id of user who made order" })
    userId: string;

  @ApiProperty({ description: "Products in order", type: [ProductResponse] })
    products: ProductResponse[];
}
