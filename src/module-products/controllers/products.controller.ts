import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductsService } from '../services/products.service';
import { RolesGuard } from 'src/guards/role.access.guard';
import DProduct from '../dtos/product.dto';

@Controller('product')
@ApiTags('Products service')
// @UseGuards(RolesGuard)
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/listProducts')
  @ApiOperation({ summary: 'List all products' })
  public async listProducts() {
    return this.productsService.listProducts();
  }

  @Post('/createProduct')
  @ApiOperation({ summary: 'Create a new product' })
  async createProduct(@Body() dProduct: DProduct) {
    return this.productsService.createProduct(dProduct);
  }

  @Delete('/deleteProduct/:product_id')
  @ApiOperation({ summary: 'Delete a product' })
  async deleteProduct(@Param('product_id') product_id: string) {
    return this.productsService.deleteProduct(product_id);
  }
}
