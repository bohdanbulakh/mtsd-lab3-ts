import { PrismaService } from '../prisma.service';
import { PrismaRepository } from '../prisma.repository';
import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderRepository extends PrismaRepository<'order', OrderEntity> {
  constructor(prisma: PrismaService) {
    super(prisma.order);
  }
}
