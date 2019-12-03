import { Model } from "../model";

export type Filter = {
  networkId: string;
  applicationId?: string;
  name: string;
  priority: number;
  lang: string;
  source: string;
  params?: { [key: string]: any };
} & Model;
