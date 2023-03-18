import { Injectable } from '@nestjs/common';
import { OwoifyService } from '../owoify/owoify.service';
import { LoremService } from '../lorem/lorem.service';
import { OwoifyOptions } from '../utils/types/OwoifyOptions';

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
}
