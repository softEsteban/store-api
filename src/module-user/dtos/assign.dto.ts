import { ApiProperty } from '@nestjs/swagger';

export class DAssign {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  role_id: string;
}

export default DAssign;
