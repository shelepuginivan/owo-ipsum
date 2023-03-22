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
    @Query() { number, format }: ApiRequestOptions,
  ): string[] | string {
    const generatedWords = this.apiService.generateWords(number);

    return this.responseFormatService.formatResponse(generatedWords, format);
  }

  @Get('sentences')
  generateSentences(
    @Query()
    { number, action, face, stutter, format, words }: ApiRequestOptions,
  ): string[] | string {
    const probabilities: OwoifyProbabilities = { action, face, stutter };

    const generatedSentences = this.apiService.generateSentences(
      number,
      probabilities,
      words,
    );

    return this.responseFormatService.formatResponse(
      generatedSentences,
      format,
    );
  }

  @Get('paragraphs')
  generateParagraphs(
    @Query()
    {
      number,
      action,
      face,
      stutter,
      format,
      words,
      sentences,
      lorem,
    }: ApiRequestOptions,
  ): string[] | string {
    const probabilities: OwoifyProbabilities = { action, face, stutter };

    const generatedParagraphs = this.apiService.generateParagraphs(
      number,
      probabilities,
      words,
      sentences,
      lorem === 'true',
    );

    return this.responseFormatService.formatResponse(
      generatedParagraphs,
      format,
    );
  }
}
