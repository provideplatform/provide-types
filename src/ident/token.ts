import { Model } from '../model';

export type Token = Model & {
  applicationId?: string;
  userId?: string;
  issuedAt?: string;
  expiresAt?: string;
  token?: string;
  permission?: number;
  data?: { [key: string]: any };
};
