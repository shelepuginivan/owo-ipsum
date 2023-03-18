import { Injectable } from '@nestjs/common';
import { randomItem } from '../utils/random-item';
import {
  DEFAULT_LOREM,
  DEFAULT_MAX_SENTENCES,
  DEFAULT_MAX_WORDS,
  DEFAULT_MIN_SENTENCES,
  DEFAULT_MIN_WORDS,
  LOREM_FIRST,
} from '../utils/constants';
import { randomRange } from '../utils/random-range';
import { capitalize } from '../utils/capitalize';
import { parseRange } from '../utils/parse-range';

@Injectable()
export class LoremService {
  generateLoremWords(amount: number): string[] {
    const res = [];

    for (let i = 0; i < amount; i++) {
      res.push(randomItem<string>(DEFAULT_LOREM));
    }

    return res;
  }

  generateLoremSentences(
    amount: number,
    wordsAmountRange?: number | string,
  ): string[] {
    const res = [];

    let [min, max] = parseRange(wordsAmountRange);

    min ||= DEFAULT_MIN_WORDS;
    max ||= DEFAULT_MAX_WORDS;

    for (let i = 0; i < amount; i++) {
      const sentence = this.generateLoremWords(randomRange(min, max)).join(' ');

      res.push(`${capitalize(sentence)}.`);
    }

    return res;
  }

  generateLoremParagraphs(
    amount: number,
    wordsAmountRange?: number | string,
    sentenceAmountRange?: number | string,
  ): string[] {
    const paragraphs = [];

    let [minSentenceAmount, maxSentenceAmount] =
      parseRange(sentenceAmountRange);

    minSentenceAmount ||= DEFAULT_MIN_SENTENCES;
    maxSentenceAmount ||= DEFAULT_MAX_SENTENCES;

    const firstParagraph = [
      LOREM_FIRST,
      ...this.generateLoremSentences(
        randomRange(minSentenceAmount - 1, maxSentenceAmount - 1),
        wordsAmountRange,
      ),
    ].join(' ');

    paragraphs.push(firstParagraph);

    for (let i = 0; i < amount - 1; i++) {
      paragraphs.push(
        this.generateLoremSentences(
          randomRange(minSentenceAmount, maxSentenceAmount),
          wordsAmountRange,
        ).join(' '),
      );
    }

    return paragraphs;
  }
}
