import { OrderEntity } from './order.entity';

export class UserEntity {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  orders: OrderEntity[];
}
