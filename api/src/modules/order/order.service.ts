import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../database/repositories/order.repository';
import { ProductRepository } from '../../database/repositories/product.repository';

@Injectable()
export class OrderService {
  constructor (
    private readonly orderRepository: OrderRepository,
    private readonly productRepository: ProductRepository
  ) {}

  async getOrder (email: string) {
    const { orderProducts, ...order } = await this.orderRepository.findOne({
      userId: email,
      finished: false,
    });
    const products = await this.productRepository.findMany({
      id: {
        in: orderProducts.map(({ productId }) => productId),
      },
    });

    return {
      ...order,
      products: products.map(({ price, ...product }) => ({
        price: +price,
        ...product,
      })),
    };
  }

  async finishOrder (email: string) {
    await this.orderRepository.update(
      {
        userId: email,
        finished: false,
      },
      {
        finished: true,
      }
    );
  }
}
