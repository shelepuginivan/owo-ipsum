import { Injectable } from '@nestjs/common';
import { OwoifyOptions } from '../utils/types/OwoifyOptions';
import {
  DEFAULT_ACTION_PROBABILITY,
  DEFAULT_FACE_PROBABILITY,
  DEFAULT_STUTTER_PROBABILITY,
} from '../utils/constants';
import { randomItem } from '../utils/randomItem';

@Injectable()
export class OwoifyService {
  owoifyWord(word: string, owoifyMap: Record<string, string>) {
    Object.keys(owoifyMap).forEach((key) => {
      const keyRegExp = new RegExp(key, 'g');
      word = word.replace(keyRegExp, owoifyMap[key]);
    });

    return word;
  }

  owoifyText(text: string, options: OwoifyOptions): string {
    const actionList = options?.actionList || DEFAULT_ACTION_LIST;
    const faceList = options?.faceList || DEFAULT_FACE_LIST;
    const owoifyMap = options?.owoifyMap || DEFAULT_OWOIFY_MAP;
    const probabilities = options?.probabilities;

    const faceProbability = probabilities?.face || DEFAULT_FACE_PROBABILITY;
    const stutterProbability =
      probabilities?.stutter || DEFAULT_STUTTER_PROBABILITY;
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
