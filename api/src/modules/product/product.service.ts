import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/database/repositories/product.repository';
import { CreateProductDTO, UpdateProductDTO } from '@mtsd-lab3/utils';
import { random } from '../../common/utils/array.utils';
import { OrderRepository } from '../../database/repositories/order.repository';
import { TUpdate } from '../../database/types/repository.types';

@Injectable()
export class ProductService {
  constructor (
    private readonly productRepository: ProductRepository,
    private readonly orderRepository: OrderRepository
  ) {}

  defaultIcons = [
    'https://imgur.com/W7ZrWRV',
    'https://imgur.com/jYEa07k',
    'https://imgur.com/2RbUFUq',
    'https://imgur.com/7nXH4bK',
    'https://imgur.com/FjZwKxR',
  ];

  async getAll () {
    const products = await this.productRepository.findMany({});
    const result = products.map(({ id, name, icon, price }) => ({
      id,
      name,
      icon,
      price,
    }));
    return { products: result };
  }

  async getById (id: string) {
    return this.productRepository.findById(id);
  }

  async create (data: CreateProductDTO) {
    const icon = data.icon ?? random(this.defaultIcons);
    return this.productRepository.create({ ...data, icon });
  }

  async updateById (id: string, data: UpdateProductDTO) {
    return this.productRepository.updateById(id, data);
  }

  async deleteById (id: string) {
    return this.productRepository.deleteById(id);
  }

  async addToCart (userId: string, productId: string) {
    const order =
      (await this.orderRepository.findOne({ finished: false, userId })) ??
      (await this.orderRepository.create({ userId }));

    const orderProduct = order.orderProducts?.find(
      (orderProduct) => orderProduct.productId === productId
    );

    const data: TUpdate<'order'> = {
      orderProducts: orderProduct
        ? {
          update: {
            where: { id: orderProduct.id },
            data: { count: orderProduct.count + 1 },
          },
        }
        : {
          create: {
            productId,
            count: 1,
          },
        },
    };

    await this.orderRepository.updateById(order.id, data);
  }
}
