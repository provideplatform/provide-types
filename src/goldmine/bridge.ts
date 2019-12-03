import { Model } from "../model";

export type Bridge = {
  networkId: string;
  applicationId?: string;
  params?: { [key: string]: any };
} & Model;
