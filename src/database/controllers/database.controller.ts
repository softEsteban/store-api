import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DatabaseService } from '../services/database.service';

@Controller('database')
export class DatabaseController {
  constructor(private dataService: DatabaseService) {}
}
