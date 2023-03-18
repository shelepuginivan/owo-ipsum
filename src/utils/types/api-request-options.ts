import { OwoifyProbabilities } from './owoify-probabilities';
import { ResponseFormat } from './response-format';

export type ApiRequestOptions = OwoifyProbabilities & {
  amount?: number;
  format?: ResponseFormat;
};
