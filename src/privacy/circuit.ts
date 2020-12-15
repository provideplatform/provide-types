import { Model } from '../model';

export type Circuit = Model & {
  name: string;
  description?: string;
  identifier: string;
  provider: string;
  type?: string;
  curve?: string;
  constraintSystem?: string;
};
