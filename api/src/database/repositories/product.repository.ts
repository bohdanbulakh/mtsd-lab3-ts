import { PrismaService } from '../prisma.service';
import { PrismaRepository } from '../prisma.repository';
import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductRepository extends PrismaRepository<'product', ProductEntity> {
  constructor(prisma: PrismaService) {
    super(prisma.product);
  }
}
