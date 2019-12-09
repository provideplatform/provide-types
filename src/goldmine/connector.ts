import { Model } from "../model";

import { LoadBalancer, Node } from "./network";

export class Connector extends Model {
  networkId: string | undefined;
  applicationId?: string;
  name: string | undefined;
  type: string | undefined;
  status: string | undefined;
  description?: string;
  config?: ConnectorConfig;
  accessedAt?: string;

  loadBalancers?: LoadBalancer[];
  nodes?: Node[];
}

export class ConnectorConfig extends Map<string, any> {
  container: string | undefined;
  credentials?: { [key: string]: any };
  engineId: string | undefined;
  env?: { [key: string]: any } | undefined;
  providerId: string | undefined;
  region: string | undefined;
  role: string | undefined;
  targetId: string | undefined;
}
