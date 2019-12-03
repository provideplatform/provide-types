import { Model } from "../model";

export class Contract extends Model {
  networkId: string | undefined;
  applicationId?: string;
  contractId?: string;
  transactionId?: string;
  name: string | undefined;
  address: string | undefined;
  params?: { [key: string]: any };
  accessedAt?: string;
}

export class TokenContract extends Model {
  networkId: string | undefined;
  applicationId?: string;
  contractId?: string;
  saleContractId?: string;
  name: string | undefined;
  symbol: string | undefined;
  decimals: number | undefined;
  address: string | undefined;
  saleAddress?: string;
  accessedAt?: string;
}
