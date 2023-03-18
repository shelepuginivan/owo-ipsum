import { Injectable } from '@nestjs/common';
import { OwoifyService } from '../owoify/owoify.service';
import { LoremService } from '../lorem/lorem.service';
import { OwoifyProbabilities } from '../utils/types/owoify-probabilities';

@Injectable()
export class ApiService {
  constructor(
    private readonly loremService: LoremService,
    private readonly owoifyService: OwoifyService,
  ) {}

  generateWords(number: number): string[] {
    const loremWords = this.loremService.generateLoremWords(number);
    return this.owoifyService.owoifyWords(loremWords);
  }

  generateSentences(
    number: number,
    probabilities: OwoifyProbabilities,
    numberOfWordsRange?: number | string,
  ): string[] {
    const loremSentences = this.loremService.generateLoremSentences(
      number,
      numberOfWordsRange,
    );
    return this.owoifyService.owoifySentences(loremSentences, probabilities);
  }

  generateParagraphs(
    number: number,
    probabilities: OwoifyProbabilities,
    numberOfWordsRange?: number | string,
    numberOfSentencesRange?: number | string,
  ): string[] {
    const loremParagraphs = this.loremService.generateLoremParagraphs(
      number,
      numberOfWordsRange,
      numberOfSentencesRange,
    );
    return this.owoifyService.owoifyParagraphs(loremParagraphs, probabilities);
  }
}
