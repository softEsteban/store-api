import { Module } from '@nestjs/common';
import { AuthModule } from 'src/module-auth/auth.module';
import { AuthService } from 'src/module-auth/services/auth.service';
import { DatabaseService } from 'src/module-database/services/database.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [AuthModule],
  controllers: [UserController],
  providers: [UserService, DatabaseService, AuthService],
  exports: [],
})
export class UsersModule {}
