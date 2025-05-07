import { PrismaService } from '../prisma.service';
import { PrismaRepository } from '../prisma.repository';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { TUpdate } from '../types/repository.types';

@Injectable()
export class UserRepository extends PrismaRepository<'user', UserEntity> {
  constructor(prisma: PrismaService) {
    super(prisma.user);
  }

  findById(email: string): Promise<UserEntity> {
    return (this.model as any).findFirst({
      where: { email },
    });
  }

  updateById(email: string, data: TUpdate<'user'>): Promise<UserEntity> {
    return (this.model as any).update({
      where: { email },
      data,
    });
  }

  deleteById(email: string): Promise<UserEntity> {
    return (this.model as any).delete({
      where: { email },
    });
  }
}
