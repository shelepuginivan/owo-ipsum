import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiRequestOptions } from '../utils/types/api-request-options';
import { OwoifyProbabilities } from '../utils/types/owoify-probabilities';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('words')
  generateWords(@Query() { amount }: ApiRequestOptions): string[] {
    return this.apiService.generateWords(amount);
  }

  @Get('sentences')
  generateSentences(
    @Query() { amount, action, face, stutter }: ApiRequestOptions,
  ): string[] {
    const probabilities: OwoifyProbabilities = { action, face, stutter };
    return this.apiService.generateSentences(amount, probabilities);
  }

  @Get('paragraphs')
  generateParagraphs(
    @Query() { amount, action, face, stutter }: ApiRequestOptions,
  ): string[] {
    const probabilities: OwoifyProbabilities = { action, face, stutter };
    return this.apiService.generateParagraphs(amount, probabilities);
  }
}
