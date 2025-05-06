import { OrderEntity } from './order.entity';
import { ProductEntity } from './product.entity';

export class OrderProductEntity {
  id: string;
  order: OrderEntity;
  orderId: string;
  product: ProductEntity;
  productId: string;
  count: number;
}
