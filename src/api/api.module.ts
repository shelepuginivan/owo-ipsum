import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { LoremService } from '../lorem/lorem.service';
import { OwoifyService } from '../owoify/owoify.service';
import { ResponseFormatService } from '../response-format/response-format.service';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [ApiService, LoremService, OwoifyService, ResponseFormatService],
})
export class ApiModule {}
