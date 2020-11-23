import { Model } from '../model';

export type LoadBalancer = Model & {
  networkId: string;
  applicationId?: string;
  name: string;
  type: string;
  host?: string;
  ipv4?: string;
  ipv6?: string;
  description?: string;
  region?: string;
  status: string;
  config?: { [key: string]: any };
}
