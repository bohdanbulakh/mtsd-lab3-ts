import { PrismaService } from '../prisma.service';
import { PrismaRepository } from '../prisma.repository';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository extends PrismaRepository<'user', UserEntity> {
  constructor(prisma: PrismaService) {
    super(prisma.user);
  }
}
