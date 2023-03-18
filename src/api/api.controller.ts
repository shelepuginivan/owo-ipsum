import { Body, Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('words')
  generateWords(@Body() { amount, options }): string[] {
    return this.apiService.generateWords(amount, options);
  }
}
