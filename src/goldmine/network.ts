import { Model } from "../model";

export class Network extends Model {
  applicationId?: string;
  networkId?: string;
  userId?: string;
  name: string | undefined;
  description?: string;
  enabled: boolean | undefined;
  chainId?: string;
  config?: { [key: string]: any };
  stats?: NetworkStats;
}

export type NetworkStats = {
  block?: number;
  chainId?: string;
  height?: number;
  lastBlockAt?: number;
  peerCount?: number;
  protocolVersion?: string;
  state?: string;
  syncing?: boolean;
  meta?: { [key: string]: any };
} & Model;

export class Node extends Model {
  networkId: string | undefined;
  applicationId?: string;
  userId?: string;
  bootnode?: boolean;
  host?: string;
  ipv4?: string;
  ipv6?: string;
  privateIpv4?: string;
  privateIpv6?: string;
  description?: string;
  role: string | undefined;
  status: string | undefined;
  config?: { [key: string]: any };
}

export class LoadBalancer extends Model {
  networkId: string | undefined;
  applicationId?: string;
  name: string | undefined;
  type: string | undefined;
  host?: string;
  ipv4?: string;
  ipv6?: string;
  description?: string;
  region?: string;
  status: string | undefined;
  config?: { [key: string]: any };
}
