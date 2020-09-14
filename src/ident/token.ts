import { Model } from '../model';

export type Token = Model & {
  accessToken?: string;
  applicationId?: string;
  organizationId?: string;
  userId?: string;
  issuedAt?: string;
  expiresAt?: string;
  token?: string;
  permission?: number;
  refreshToken?: string;
  data?: { [key: string]: any };
};
