import { ApiProperty } from '@nestjs/swagger';

export class DUser {
  @ApiProperty()
  document: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  password: string;
}

export default DUser;
