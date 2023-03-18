import { OwoifyProbabilities } from './owoify-probabilities';

export type ApiRequestOptions = OwoifyProbabilities & {
  amount?: number;
  responseFormat?: 'plain' | 'json' | 'html';
};
