import { Model } from "../model";

export class Token extends Model {
  applicationId?: string;
  userId?: string;
  issuedAt: string | undefined;
  expiresAt?: string;
  token?: string;
  data?: { [key: string]: any };
}
