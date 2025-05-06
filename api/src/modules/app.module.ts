import { Module } from '@nestjs/common';
import { ApiModule } from './api.module';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [ApiModule, PrismaModule],
})
export class AppModule {}
