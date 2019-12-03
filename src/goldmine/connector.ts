import { Model } from "../model";

import { LoadBalancer, Node } from "./network";

export class Connector extends Model {
  networkId: string | undefined;
  applicationId?: string;
  name: string | undefined;
  type: string | undefined;
  status: string | undefined;
  description?: string;
  config?: { [key: string]: any };
  accessedAt?: string;

  loadBalancers?: LoadBalancer[];
  nodes?: Node[];
}
