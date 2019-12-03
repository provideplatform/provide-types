import { Model } from "../model";

export class Channel extends Model {
  paymentHubId?: string;
  applicationId?: string;
  billingAccountId?: string;
  userId?: string;
  address?: string;
  status?: string;
  config?: { [key: string]: any };
  metadata: { [key: string]: any } | undefined;
}

export class Hub extends Model {
  networkId: string | undefined;
  networkNodeIds: string[] | undefined;
  applicationId: string | undefined;
  name?: string;
  status: string | undefined;
  description?: string;
  config: { [key: string]: any } | undefined;
}
