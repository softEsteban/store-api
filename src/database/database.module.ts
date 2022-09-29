import { Module } from '@nestjs/common';
import { DatabaseController } from './controllers/database.controller';
import { DatabaseService } from './services/database.service';

@Module({
  imports: [],
  controllers: [DatabaseController],
  providers: [DatabaseService],
  exports: [],
})
export class DatabaseModule {}
