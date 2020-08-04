import { BigNumber, Model } from '../model';

export type Account = Model & {
  networkId?: string;
  walletId?: string;
  applicationId?: string;
  userId?: string;

  address: string;
  hdDerivationPath?: string;
  publicKey?: string;
  privateKey?: string;

  balance?: BigNumber;
  accessAt?: string;
}

export type Wallet = Model & {
  walletId?: string;
  applicationId?: string;
  userId?: string;

  path?: string;
  purpose?: number;
  mnemonic?: string;
  seed?: string;
  publicKey?: string;
  privateKey?: string;
}
