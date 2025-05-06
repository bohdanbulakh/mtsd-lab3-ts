import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserEntity } from '../../database/entities/user.entity';

export const GetUser = createParamDecorator(
  (field: keyof Omit<UserEntity, 'password'> | null = null, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return field ? request.user?.[field] : request.user;
  });
