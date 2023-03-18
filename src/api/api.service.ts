import { Injectable } from '@nestjs/common';
import { OwoifyOptions } from '../utils/types/OwoifyOptions';
import {
  DEFAULT_ACTION_PROBABILITY,
  DEFAULT_FACE_PROBABILITY,
  DEFAULT_STUTTER_PROBABILITY,
} from '../utils/constants';
import { randomItem } from '../utils/randomItem';

@Injectable()
export class ApiService {
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
