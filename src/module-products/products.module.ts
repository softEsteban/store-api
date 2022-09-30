import { Module } from '@nestjs/common';
import { AuthModule } from 'src/module-auth/auth.module';
import { AuthService } from 'src/module-auth/services/auth.service';
import { DatabaseService } from 'src/module-database/services/database.service';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [AuthModule],
  controllers: [ProductsController],
  providers: [ProductsService, DatabaseService, AuthService],
  exports: [],
})
export class ProductsModule {}
