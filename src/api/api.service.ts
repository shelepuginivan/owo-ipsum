import { Injectable } from '@nestjs/common';
import { OwoifyService } from '../owoify/owoify.service';
import { LoremService } from '../lorem/lorem.service';
import { OwoifyProbabilities } from '../utils/types/OwoifyProbabilities';

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
  ): string[] {
    const loremSentences = this.loremService.generateLoremSentences(amount);
    return this.owoifyService.owoifySentences(loremSentences, probabilities);
  }
}
