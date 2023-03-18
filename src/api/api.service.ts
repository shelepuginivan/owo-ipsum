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

  generateWords(amount: number): string[] {
    const loremWords = this.loremService.generateLoremWords(amount);
    return this.owoifyService.owoifyWords(loremWords);
  }

  generateSentences(
    amount: number,
    probabilities: OwoifyProbabilities,
    wordsAmountRange?: number | string,
  ): string[] {
    const loremSentences = this.loremService.generateLoremSentences(
      amount,
      wordsAmountRange,
    );
    return this.owoifyService.owoifySentences(loremSentences, probabilities);
  }

  generateParagraphs(
    amount: number,
    probabilities: OwoifyProbabilities,
    wordsAmountRange?: number | string,
    sentencesAmountRange?: number | string,
  ): string[] {
    const loremParagraphs = this.loremService.generateLoremParagraphs(
      amount,
      wordsAmountRange,
      sentencesAmountRange,
    );
    return this.owoifyService.owoifyParagraphs(loremParagraphs, probabilities);
  }
}
