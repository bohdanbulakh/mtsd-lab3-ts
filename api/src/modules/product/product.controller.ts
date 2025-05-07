import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO, UpdateProductDTO } from '@mtsd-lab3/utils';
import { ProductByIdPipe } from '../../common/pipes/product-by-id.pipe';

@Controller('product')
export class ProductController {
  constructor (
    private readonly productService: ProductService,
  ) {}

  @Get()
  async getAll () {
    return this.productService.getAll();
  }

  @Get(':id')
  async getById (@Param('id', ProductByIdPipe) id: string) {
    return this.productService.getById(id);
  }

  @Post()
  async create(
    @Body() body: CreateProductDTO,
  ) {
    return this.productService.create(body);
  }

  @Patch(':id')
  async updateById (
    @Param('id', ProductByIdPipe) id: string,
    @Body() body: UpdateProductDTO,
  ) {
    return this.productService.updateById(id, body);
  }

  @Delete(':id')
  async deleteById (
    @Param('id', ProductByIdPipe) id: string,
  ) {
    return this.productService.deleteById(id);
  }
}
