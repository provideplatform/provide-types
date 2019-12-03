import { Model } from "../model";

export class Bridge extends Model {
  networkId: string | undefined;
  applicationId?: string;
  params?: { [key: string]: any };
}
