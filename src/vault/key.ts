import { Model } from "../model";

export type Key = Model & {
  vaultId: string;
  type: string;
  usage: string;
  spec: string;
  name: string;
  description?: string;
  publicKey?: string;
  address?: string;
}
