import { Model } from "../model";

export type Token = {
  applicationId?: string;
  userId?: string;
  issuedAt: string;
  expiresAt?: string;
  token?: string;
  data?: { [key: string]: any };
} & Model;
