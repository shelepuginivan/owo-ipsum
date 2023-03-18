import { Injectable } from '@nestjs/common';
import { randomItem } from '../utils/randomItem';
import { DEFAULT_LOREM, LOREM_FIRST } from '../utils/constants';
import { randomRange } from '../utils/randomRange';
import { capitalize } from '../utils/capitalize';

@Injectable()
export class LoremService {
  generateLoremWords(amount: number): string[] {
    const res = [];

    for (let i = 0; i < amount; i++) {
      res.push(randomItem<string>(DEFAULT_LOREM));
    }

    return res;
  }

  generateLoremSentences(amount: number): string[] {
    const res = [];

    for (let i = 0; i < amount; i++) {
      const sentence = this.generateLoremWords(randomRange(5, 15)).join(' ');

      res.push(`${capitalize(sentence)}.`);
    }

    return res;
  }

  generateLoremParagraphs(amount: number): string[] {
    const paragraphs = [];

    const firstParagraph = [
      LOREM_FIRST,
      ...this.generateLoremSentences(randomRange(3, 7)),
    ].join(' ');

    paragraphs.push(firstParagraph);

    for (let i = 0; i < amount - 1; i++) {
      paragraphs.push(this.generateLoremSentences(randomRange(4, 8)));
    }

    return paragraphs;
  }
}
