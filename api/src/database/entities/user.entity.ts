import { OrderEntity } from './order.entity';

export class UserEntity {
  id: string;
  firstName: string;
  lastName: string;
  password?: string;
  email: string;
  orders: OrderEntity[];
}
