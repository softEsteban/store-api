import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './module-database/database.module';
import { UsersModule } from './module-user/users.module';
import { AuthModule } from './module-auth/auth.module';
import { ProductsModule } from './module-products/products.module';
import { SalesModule } from './module-sales/sales.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    ProductsModule,
    SalesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
