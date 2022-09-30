import { ApiProperty } from '@nestjs/swagger';

export class DSale {
  @ApiProperty()
  product_id: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  qty: number;
}

export default DSale;
