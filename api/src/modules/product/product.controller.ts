import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO, UpdateProductDTO } from '@mtsd-lab3/utils';
import { ProductByIdPipe } from '../../common/pipes/product-by-id.pipe';
import { ApiEndpoint } from '../../common/decorators/api-endpoint.decorator';
import { ProductDocumentation } from '../../common/documentation/modules/product';
import { AccessGuard } from '../../common/guards/auth/access.guard';

@Controller('product')
export class ProductController {
  constructor (
    private readonly productService: ProductService,
  ) {}

  @Get()
  @ApiEndpoint({
    summary: 'Get all products',
    documentation: ProductDocumentation.GET_ALL,
  })
  async getAll () {
    return this.productService.getAll();
  }

  @Get(':id')
  @ApiEndpoint({
    summary: 'Get product by id',
    documentation: ProductDocumentation.GET_BY_ID,
  })
  async getById (@Param('id', ProductByIdPipe) id: string) {
    return this.productService.getById(id);
  }

  @Post()
  @ApiEndpoint({
    summary: 'Create a product',
    documentation: ProductDocumentation.CREATE,
    guards: AccessGuard,
  })
  async create(
    @Body() body: CreateProductDTO,
  ) {
    return this.productService.create(body);
  }

  @Patch(':id')
  @ApiEndpoint({
    summary: 'Update a product by id',
    documentation: ProductDocumentation.UPDATE_BY_ID,
    guards: AccessGuard,
  })
  async updateById (
    @Param('id', ProductByIdPipe) id: string,
    @Body() body: UpdateProductDTO,
  ) {
    return this.productService.updateById(id, body);
  }

  @Delete(':id')
  @ApiEndpoint({
    summary: 'Delete a product by id',
    documentation: ProductDocumentation.DELETE_BY_ID,
    guards: AccessGuard,
  })
  async deleteById (
    @Param('id', ProductByIdPipe) id: string,
  ) {
    return this.productService.deleteById(id);
  }
}
