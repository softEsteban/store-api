import { ApiProperty } from '@nestjs/swagger';

export class DSaleUpdate {
  @ApiProperty()
  sale_id: string;

  @ApiProperty()
  product_id: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  qty: number;
}

export default DSaleUpdate;
