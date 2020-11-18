import { Model } from '../model';
import { Organization } from './organization';

export type Application = Model & {
  networkId?: string;
  userId?: string;
  name: string;
  description?: string;
  config?: { [key: string]: any };
  hidden?: boolean;
  type?: string;

  organizations?: Organization[];
};
