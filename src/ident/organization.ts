import { Model } from '../model';
import { User } from './user';

export type Organization = Model & {
  name: string;
  userId?: string;
  description?: string;
  permissions?: number;
  metadata?: { [key: string]: any };

  users?: User[];
};
