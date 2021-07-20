import { Model } from '../model';

export type Object = Model & {
  type: string;
  payload?: { [key: string]: any };
};
