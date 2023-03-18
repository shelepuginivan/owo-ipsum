import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { LoremService } from './lorem/lorem.service';
import { OwoifyService } from './owoify/owoify.service';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [AppService, LoremService, OwoifyService],
})
export class AppModule {}
