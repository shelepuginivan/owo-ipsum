import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiQueryOptions } from '../utils/types/ApiQueryOptions';
import { OwoifyProbabilities } from '../utils/types/OwoifyProbabilities';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('words')
  generateWords(@Query() { amount }: ApiQueryOptions): string[] {
    return this.apiService.generateWords(amount);
  }

  @Get('sentences')
  generateSentences(
    @Query() { amount, action, face, stutter }: ApiQueryOptions,
  ): string[] {
    const probabilities: OwoifyProbabilities = { action, face, stutter };
    return this.apiService.generateSentences(amount, probabilities);
  }
}
