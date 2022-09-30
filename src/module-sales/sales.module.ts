import { Module } from '@nestjs/common';
import { AuthModule } from 'src/module-auth/auth.module';
import { AuthService } from 'src/module-auth/services/auth.service';
import { DatabaseService } from 'src/module-database/services/database.service';
import { SalesController } from './controllers/sales.controller';
import { SalesService } from './services/sales.service';

@Module({
  imports: [AuthModule],
  controllers: [SalesController],
  providers: [SalesService, DatabaseService, AuthService],
  exports: [],
})
export class SalesModule {}
