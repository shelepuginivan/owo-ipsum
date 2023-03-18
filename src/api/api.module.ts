import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { LoremService } from '../lorem/lorem.service';
import { OwoifyService } from '../owoify/owoify.service';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [ApiService, LoremService, OwoifyService],
})
export class ApiModule {}
