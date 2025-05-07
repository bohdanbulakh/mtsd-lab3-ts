import { Injectable, PipeTransform } from '@nestjs/common';
import { ProductRepository } from '../../database/repositories/product.repository';
import { ProductEntity } from '../../database/entities/product.entity';
import { InvalidEntityIdException } from '../exceptions/invalid-entity-id.exception';

@Injectable()
export class ProductByIdPipe implements PipeTransform {
  constructor (
    private productRepository: ProductRepository,
  ) {}

  async transform (id: string) {
    const product: ProductEntity = await this.productRepository.findOne({ id });
    if (!product) {
      throw new InvalidEntityIdException('Product');
    }
    return id;
  }
}
