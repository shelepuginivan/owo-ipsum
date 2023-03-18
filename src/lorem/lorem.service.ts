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
  generateLoremWords(numberOfWords: number): string[] {
    const res = [];

    for (let i = 0; i < numberOfWords; i++) {
      res.push(randomItem<string>(DEFAULT_LOREM));
    }

    return res;
  }

  generateLoremSentences(
    numberOfSentence: number,
    numberOfWordsRange?: number | string,
  ): string[] {
    const res = [];

    let [min, max] = parseRange(numberOfWordsRange);

    min ||= DEFAULT_MIN_WORDS;
    max ||= DEFAULT_MAX_WORDS;

    for (let i = 0; i < numberOfSentence; i++) {
      const sentence = this.generateLoremWords(randomRange(min, max)).join(' ');

      res.push(`${capitalize(sentence)}.`);
    }

    return res;
  }

  generateLoremParagraphs(
    numberOfParagraphs: number,
    numberOfWordsRange?: number | string,
    numberOfSentencesRange?: number | string,
  ): string[] {
    const paragraphs = [];

    let [minNumberOfSentences, maxNumberOfSentences] = parseRange(
      numberOfSentencesRange,
    );

    minNumberOfSentences ||= DEFAULT_MIN_SENTENCES;
    maxNumberOfSentences ||= DEFAULT_MAX_SENTENCES;

    const firstParagraph = [
      LOREM_FIRST,
      ...this.generateLoremSentences(
        randomRange(minNumberOfSentences - 1, maxNumberOfSentences - 1),
        numberOfWordsRange,
      ),
    ].join(' ');

    paragraphs.push(firstParagraph);

    for (let i = 0; i < numberOfParagraphs - 1; i++) {
      paragraphs.push(
        this.generateLoremSentences(
          randomRange(minNumberOfSentences, maxNumberOfSentences),
          numberOfWordsRange,
        ).join(' '),
      );
    }

    return paragraphs;
  }
}
