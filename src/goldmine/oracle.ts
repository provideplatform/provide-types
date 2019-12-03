import { Model } from "../model";

export class Oracle extends Model {
  networkId: string | undefined;
  contractId?: string;
  applicationId?: string;
  name: string | undefined;
  feedUrl?: string;
  params?: { [key: string]: any };
}
