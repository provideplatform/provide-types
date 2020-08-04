import { Model } from "../model";

export type Vault = Model & {
  name: string;
  description?: string;
  masterKeyId?: string;
}
