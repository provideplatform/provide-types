import { Model } from "../model";

import { LoadBalancer, Node } from "./network";

export type Connector = {
  networkId: string;
  applicationId?: string;
  name: string;
  type: string;
  status: string;
  description?: string;
  config?: { [key: string]: any };
  accessedAt?: string;

  loadBalancers?: LoadBalancer[];
  nodes?: Node[];
} & Model;
