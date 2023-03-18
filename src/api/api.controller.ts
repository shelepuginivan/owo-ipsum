import { Controller, Get, Query } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiRequestOptions } from '../utils/types/api-request-options';
import { OwoifyProbabilities } from '../utils/types/owoify-probabilities';
import { ResponseFormatService } from '../response-format/response-format.service';

@Controller('api')
export class ApiController {
  constructor(
    private readonly apiService: ApiService,
    private readonly responseFormatService: ResponseFormatService,
  ) {}

  @Get('words')
  generateWords(
    @Query() { amount, responseFormat }: ApiRequestOptions,
  ): string[] | string {
    const generatedWords = this.apiService.generateWords(amount);

    return this.responseFormatService.formatResponse(
      generatedWords,
      responseFormat,
    );
  }

  @Get('sentences')
  generateSentences(
    @Query()
    { amount, action, face, stutter, responseFormat }: ApiRequestOptions,
  ): string[] | string {
    const probabilities: OwoifyProbabilities = { action, face, stutter };

    const generatedSentences = this.apiService.generateSentences(
      amount,
      probabilities,
    );

    return this.responseFormatService.formatResponse(
      generatedSentences,
      responseFormat,
    );
  }

  @Get('paragraphs')
  generateParagraphs(
    @Query()
    { amount, action, face, stutter, responseFormat }: ApiRequestOptions,
  ): string[] | string {
    const probabilities: OwoifyProbabilities = { action, face, stutter };

    const generatedParagraphs = this.apiService.generateParagraphs(
      amount,
      probabilities,
    );

    return this.responseFormatService.formatResponse(
      generatedParagraphs,
      responseFormat,
    );
  }
}
