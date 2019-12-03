import { Model } from "../model";

export type Channel = {
  paymentHubId?: string;
  applicationId?: string;
  billingAccountId?: string;
  userId?: string;
  address?: string;
  status?: string;
  config: { [key: string]: any };
  metadata: { [key: string]: any };
} & Model;

export type Hub = {
  networkId: string;
  networkNodeIds: string[];
  applicationId: string;
  name?: string;
  status: string;
  description?: string;
  config: { [key: string]: any };
} & Model;
