import { Model } from "../model";

export class Token extends Model {
  applicationId?: string;
  userId?: string;
  issuedAt: string | undefined;
  expiresAt?: string;
  token?: string;
  permission: number | undefined;
  data?: { [key: string]: any };
}
