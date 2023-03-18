import { OwoifyProbabilities } from './OwoifyProbabilities';

export type ApiQueryOptions = OwoifyProbabilities & {
  amount?: number;
  responseFormat?: 'plain' | 'json' | 'html';
};
