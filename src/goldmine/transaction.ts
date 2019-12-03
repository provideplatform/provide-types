import { BigNumber, Model } from "../model";

export class Transaction extends Model {
  networkId: string | undefined;
  contractId?: string;
  accountId?: string;
  applicationId?: string;
  userId?: string;
  signer?: string;
  to?: string;
  value: BigNumber | undefined;
  data?: string;
  hash?: string;
  status: string | undefined;
  params?: { [key: string]: any };
  ref?: string;
  description?: string;
  traces?: any; // FIXME
  block?: number;
  blockTimestamp?: string;
  broadcastAt?: string;
  finalizedAt?: string;
  publishedAt?: string;
  publishLatecy?: number;
  broadcastLatency?: number;
  e2eLatency?: number;
}
