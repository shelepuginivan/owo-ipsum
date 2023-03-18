import { Injectable } from '@nestjs/common';
import { OwoifyOptions } from '../utils/types/OwoifyOptions';
import {
  DEFAULT_ACTION_PROBABILITY,
  DEFAULT_FACE_PROBABILITY,
  DEFAULT_LOREM,
  DEFAULT_STUTTER_PROBABILITY,
  LOREM_FIRST,
} from '../utils/constants';
import { randomItem } from '../utils/randomItem';
import { randomRange } from '../utils/randomRange';
import { capitalize } from '../utils/capitalize';

@Injectable()
export class ApiService {
  generateLoremWords(amount: number): string[] {
    const res = [];

    for (let i = 0; i < amount; i++) {
      res.push(randomItem<string>(DEFAULT_LOREM).split(''));
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

  owoifyWord(word: string, owoifyMap: Record<string, string>) {
    Object.keys(owoifyMap).forEach((key) => {
      const keyRegExp = new RegExp(key, 'g');
      word = word.replace(keyRegExp, owoifyMap[key]);
    });

    return word;
  }

  owoifyText(text: string, options: OwoifyOptions): string {
    const { actionList, faceList, owoifyMap, probabilities } = options;

    const faceProbability = probabilities.face || DEFAULT_FACE_PROBABILITY;
    const stutterProbability =
      probabilities.stutter || DEFAULT_STUTTER_PROBABILITY;
    const actionProbability =
      probabilities.action || DEFAULT_ACTION_PROBABILITY;

    let owoifiedText = '';

    text.split(' ').forEach((word) => {
      word = this.owoifyWord(word, owoifyMap);

      if (Math.random() < actionProbability) {
        owoifiedText += `${randomItem<string>(actionList)} `;
      }

      if (Math.random() < faceProbability) {
        owoifiedText += `${randomItem<string>(faceList)} `;
      }

      if (Math.random() < stutterProbability) {
        const firstLetter = word.charAt(0);

        word = word.replace(firstLetter, `${firstLetter}-${firstLetter}`);
      }

      owoifiedText += `${word} `;
    });

    return owoifiedText;
  }
}
