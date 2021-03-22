import { Model } from '../model';

export type BusinessObject = Model & {
  type: string;
  payload?: { [key: string]: any };
};
