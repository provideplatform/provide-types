import { Model } from "../model";

export type Bridge = Model & {
  networkId?: string;
  applicationId?: string;
  params?: { [key: string]: any };
}
