import { Model } from '../model';

export type Prover = Model & {
  artifacts?: object;
  name: string;
  description?: string;
  identifier: string;
  provider: string;
  type?: string;
  curve?: string;
  noteStoreId?: string;
  nullifierStoreId?: string;
  provingScheme?: string;
  provingKeyId?: string;
  verifyingKeyId?: string;
  verifierContract?: object;
};
