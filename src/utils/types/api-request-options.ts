import { OwoifyProbabilities } from './owoify-probabilities';
import { ResponseFormat } from './response-format';

export type ApiRequestOptions = OwoifyProbabilities & {
  number?: number;
  format?: ResponseFormat;
  sentences?: number | string;
  words?: number | string;
};
