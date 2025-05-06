import { Decimal } from '@prisma/client/runtime/client';
import { OrderProductEntity } from './order-product.entity';

export class ProductEntity {
  id: string;
  icon: string;
  name: string;
  price: Decimal;
  description: string | null;
  orderProducts: OrderProductEntity[];
}
