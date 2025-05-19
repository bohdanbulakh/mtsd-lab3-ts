import { Controller, Get, Patch } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResponse } from '@mtsd-lab3/utils';
import { ApiEndpoint } from '../../common/decorators/api-endpoint.decorator';
import { AccessGuard } from '../../common/guards/auth/access.guard';
import { OrderDocumentation } from '../../common/documentation/modules/order';
import { GetUser } from '../../common/decorators/get-user.decorator';

@Controller('order')
export class OrderController {
  constructor (
    private readonly orderService: OrderService,
  ) {}

  @Get()
  @ApiEndpoint({
    summary: 'Get order',
    guards: AccessGuard,
    documentation: OrderDocumentation.GET_ORDER,
  })
  getOrder (
    @GetUser('email') email: string,
  ): Promise<OrderResponse> {
    return this.orderService.getOrder(email);
  }

  @Patch('/finish')
  @ApiEndpoint({
    summary: 'Finish order',
    guards: AccessGuard,
    documentation: OrderDocumentation.FINISH_ORDER,
  })
  async finishOrder (
    @GetUser('email') email: string,
  ) {
    await this.orderService.finishOrder(email);
  }
}
