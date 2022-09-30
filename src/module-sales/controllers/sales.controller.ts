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
import DSale from '../dtos/sale.dto';
import DSaleUpdate from '../dtos/sale.update.dto';

import { SalesService } from '../services/sales.service';

@Controller('sales')
@ApiTags('Sales service')
// @UseGuards(RolesGuard)
export class SalesController {
  constructor(private salesService: SalesService) {}

  @Post('/createSale')
  @ApiOperation({ summary: 'Create a new sale' })
  async createSale(@Body() dSale: DSale) {
    return this.salesService.createSale(dSale);
  }

  @Put('/updateSale')
  @ApiOperation({ summary: 'Updates a sale' })
  public async updateSale(@Body() dSale: DSaleUpdate) {
    return this.salesService.updateSale(dSale);
  }

  @Get('/listSales')
  @ApiOperation({ summary: 'List all sales' })
  public async listSales() {
    return this.salesService.listSales();
  }

  @Delete('/deleteSale/:sale_id')
  @ApiOperation({ summary: 'Delete a sale' })
  public async deleteSale(@Param('sale_id') sale_id: string) {
    return this.salesService.deleteSale(sale_id);
  }
}
