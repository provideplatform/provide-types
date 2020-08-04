import { Model } from "../model";

export type Secret = Model & {
  vaultId: string;
  type: string;
  name: string;
  description?: string;
}
