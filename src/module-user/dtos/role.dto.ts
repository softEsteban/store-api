import { ApiProperty } from '@nestjs/swagger';

export class DRole {
  @ApiProperty()
  name: string;
}

export default DRole;
