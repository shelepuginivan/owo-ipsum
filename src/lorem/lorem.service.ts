import { Injectable } from '@nestjs/common';
import { randomItem } from '../utils/random-item';
import {
  LOREM,
  DEFAULT_MAX_SENTENCES,
  DEFAULT_MAX_WORDS,
  DEFAULT_MIN_SENTENCES,
  DEFAULT_MIN_WORDS,
  LOREM_FIRST,
  NUMBER_OF_ITEMS_LIMIT,
  COMMON_LOWER_LIMIT,
  WORDS_LIMIT,
  SENTENCE_LIMIT,
} from '../utils/constants';
import { randomRange } from '../utils/random-range';
import { capitalize } from '../utils/capitalize';
import { parseRange } from '../utils/parse-range';
import { limitNumber } from '../utils/limit-number';

@Injectable()
export class LoremService {
  generateLoremWords(numberOfWords: number): string[] {
    const words = [];

    numberOfWords = limitNumber(
      numberOfWords,
      NUMBER_OF_ITEMS_LIMIT,
      COMMON_LOWER_LIMIT,
    );

    for (let i = 0; i < numberOfWords; i++) {
      words.push(randomItem<string>(LOREM));
    }

    return words;
  }

  generateLoremSentences(
    numberOfSentence: number,
    numberOfWordsRange?: number | string,
  ): string[] {
    const res = [];

    numberOfSentence = limitNumber(
      numberOfSentence,
      NUMBER_OF_ITEMS_LIMIT,
      COMMON_LOWER_LIMIT,
    );

    let [min, max] = parseRange(numberOfWordsRange).map((num) =>
      limitNumber(num, WORDS_LIMIT, COMMON_LOWER_LIMIT),
    );

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

    numberOfParagraphs = limitNumber(
      numberOfParagraphs,
      NUMBER_OF_ITEMS_LIMIT,
      COMMON_LOWER_LIMIT,
    );

    let [minNumberOfSentences, maxNumberOfSentences] = parseRange(
      numberOfSentencesRange,
    ).map((num) => limitNumber(num, SENTENCE_LIMIT, COMMON_LOWER_LIMIT));

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
