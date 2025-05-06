import { PrismaService } from './prisma.service';
import { Global, Module } from '@nestjs/common';
import { OrderRepository } from './repositories/order.repository';
import { OrderProductRepository } from './repositories/order-product.repository';
import { ProductRepository } from './repositories/product.repository';
import { UserRepository } from './repositories/user.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    OrderRepository,
    OrderProductRepository,
    ProductRepository,
    UserRepository
  ],
  exports: [
    OrderRepository,
    OrderProductRepository,
    ProductRepository,
    UserRepository
  ],
})
export class PrismaModule {}
