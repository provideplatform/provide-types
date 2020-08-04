import { Model } from '../model';

export type Contract = Model & {
  networkId: string;
  applicationId?: string;
  contractId?: string;
  transactionId?: string;
  name: string;
  address: string;
  params?: { [key: string]: any };
  accessedAt?: string;
};

export type TokenContract = Model & {
  networkId: string;
  applicationId?: string;
  contractId?: string;
  saleContractId?: string;
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  saleAddress?: string;
  accessedAt?: string;
};
