import { UserEntity } from './user.entity';
import { OrderProductEntity } from './order-product.entity';

export class OrderEntity {
  id: string;
  finished: boolean;
  user: UserEntity;
  userId: string;
  orderProducts: OrderProductEntity[];
}
