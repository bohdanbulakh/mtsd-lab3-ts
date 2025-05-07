import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/database/repositories/product.repository';
import { CreateProductDTO, UpdateProductDTO } from '@mtsd-lab3/utils';
import { random } from '../../common/utils/array.utils';

@Injectable()
export class ProductService {
  constructor (
    private readonly productRepository: ProductRepository,
  ) {}

  defaultIcons = [
    'https://imgur.com/W7ZrWRV',
    'https://imgur.com/jYEa07k',
    'https://imgur.com/2RbUFUq',
    'https://imgur.com/7nXH4bK',
    'https://imgur.com/FjZwKxR'
  ]

  async getAll () {
    return this.productRepository.findMany({})
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
}
