import { Injectable } from '@nestjs/common';
import { OwoifyProbabilities } from '../utils/types/owoify-probabilities';
import {
  ACTION_LIST,
  DEFAULT_ACTION_PROBABILITY,
  DEFAULT_FACE_PROBABILITY,
  DEFAULT_STUTTER_PROBABILITY,
  FACE_LIST,
  OWOIFY_MAP,
} from '../utils/constants';
import { randomItem } from '../utils/random-item';

@Injectable()
export class OwoifyService {
  owoifyWord(word: string, owoifyMap: Record<string, string>) {
    Object.keys(owoifyMap).forEach((key) => {
      const keyRegExp = new RegExp(key, 'g');
      word = word.replace(keyRegExp, owoifyMap[key]);
    });

    return word;
  }

  owoifyText(text: string, probabilities: OwoifyProbabilities): string {
    const faceProbability = probabilities?.face || DEFAULT_FACE_PROBABILITY;
    const stutterProbability =
      probabilities?.stutter || DEFAULT_STUTTER_PROBABILITY;
    const actionProbability =
      probabilities?.action || DEFAULT_ACTION_PROBABILITY;

    const owoifiedText = [];

    text.split(' ').forEach((word) => {
      word = this.owoifyWord(word, OWOIFY_MAP);

      if (Math.random() < actionProbability) {
        owoifiedText.push(randomItem<string>(ACTION_LIST));
      }

      if (Math.random() < faceProbability) {
        owoifiedText.push(randomItem<string>(FACE_LIST));
      }

      if (Math.random() < stutterProbability) {
        const firstLetter = word.charAt(0);

        word = word.replace(firstLetter, `${firstLetter}-${firstLetter}`);
      }

      owoifiedText.push(word);
    });

    return owoifiedText.join(' ');
  }

  owoifyWords(words: string[]): string[] {
    return words.map((word) => this.owoifyWord(word, OWOIFY_MAP));
  }

  owoifySentences(
    sentences: string[],
    probabilities: OwoifyProbabilities,
  ): string[] {
    return sentences.map((sentence) =>
      this.owoifyText(sentence, probabilities),
    );
  }

  owoifyParagraphs(
    paragraphs: string[],
    probabilities: OwoifyProbabilities,
  ): string[] {
    return paragraphs.map((paragraph) =>
      this.owoifyText(paragraph, probabilities),
    );
  }
}
