import { ApiProperty } from '@nestjs/swagger';

export class DProduct {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: string;
}

export default DProduct;
