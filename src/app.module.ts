import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './module-database/database.module';
import { UsersModule } from './module-user/users.module';
import { AuthModule } from './module-auth/auth.module';
import { ProductsModule } from './module-products/products.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
