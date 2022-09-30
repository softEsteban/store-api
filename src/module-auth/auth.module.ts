import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/module-database/services/database.service';
import { AuthService } from './services/auth.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthService, DatabaseService],
  exports: [],
})
export class AuthModule {}
