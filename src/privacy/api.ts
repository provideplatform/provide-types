import { Error } from '../model';

export type ProveResponse = {
  errors?: Error[];
  metadata?: any;
  proof: string;
};

export type VerifyResponse = {
  errors?: Error[];
  metadata?: any;
  result: boolean;
};
