import { Model } from "../model";

export type Application = {
  networkId: string;
  userId: string;
  name: string;
  description?: string;
  config?: { [key: string]: any };
  hidden: boolean;
} & Model;
