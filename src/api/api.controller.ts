import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  @Get('txt')
  generateOwoIpsum(): string {
    return 'Lorem Ipsum';
  }
}
