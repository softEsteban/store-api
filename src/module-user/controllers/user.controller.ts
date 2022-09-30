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
import roleDto, { DRole } from '../dtos/role.dto';
import { UserService } from '../services/user.service';
import { RolesGuard } from 'src/guards/role.access.guard';
import DUser from '../dtos/user.dto';
import DAssign from '../dtos/assign.dto';

@Controller('users')
@ApiTags('Users and roles service')
// @UseGuards(RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/createRole')
  @ApiOperation({ summary: 'Create a new role' })
  async createRole(@Body() dRole: DRole) {
    return this.userService.createRole(dRole);
  }

  @Get('/listRoles')
  @ApiOperation({ summary: 'List all roles' })
  public async listRoles() {
    return this.userService.listRoles();
  }

  @Post('/createUser')
  @ApiOperation({ summary: 'Create a new user' })
  async createUser(@Body() dUser: DUser) {
    return this.userService.createUser(dUser);
  }

  @Get('/listUsers')
  @ApiOperation({ summary: 'List all users' })
  public async listUsers() {
    return this.userService.listUsers();
  }

  @Delete('/deleteUser/:user_id')
  @ApiOperation({ summary: 'Delete a user' })
  public async deleteUser(@Param('user_id') user_id: string) {
    return this.userService.deleteUser(user_id);
  }

  @Put('/assignRole')
  @ApiOperation({ summary: 'Assign role to a user' })
  public async assignRole(@Body() dAssign: DAssign) {
    return this.userService.assignRole(dAssign);
  }
}
