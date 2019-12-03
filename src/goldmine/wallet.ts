import { BigNumber, Model } from "../model";

export class Account extends Model {
  networkId?: string;
  walletId?: string;
  applicationId?: string;
  userId?: string;

  address: string | undefined;
  hdDerivationPath?: string;
  publicKey?: string;
  privateKey?: string;

  balance?: BigNumber;
  accessAt?: string;
}

export class Wallet extends Model {
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
