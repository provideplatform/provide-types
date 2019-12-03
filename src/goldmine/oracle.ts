import { Model } from "../model";

export type Oracle = {
  networkId: string;
  contractId?: string;
  applicationId?: string;
  name: string;
  feedUrl?: string;
  params?: { [key: string]: any };
} & Model;
