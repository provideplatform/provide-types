import { Model } from "../model";

export class Filter extends Model {
  networkId: string | undefined;
  applicationId?: string;
  name: string | undefined;
  priority: number | undefined;
  lang: string | undefined;
  source: string | undefined;
  params?: { [key: string]: any };
}
