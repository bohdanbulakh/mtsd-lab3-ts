import { PrismaService } from '../prisma.service';
import { PrismaRepository } from '../prisma.repository';
import { Injectable } from '@nestjs/common';
import { OrderProductEntity } from '../entities/order-product.entity';

@Injectable()
export class OrderProductRepository extends PrismaRepository<'orderProduct', OrderProductEntity> {
  constructor(prisma: PrismaService) {
    super(prisma.orderProduct);
  }
}
