import { ApiProperty } from '@nestjs/swagger';

export class DFilter {
  @ApiProperty()
  date: string;
}

export default DFilter;
