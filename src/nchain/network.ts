import { Model } from '../model';

export type Network = Model & {
  applicationId?: string;
  networkId?: string;
  userId?: string;
  name: string;
  description?: string;
  enabled: boolean;
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

export type Node = Model & {
  networkId: string;
  applicationId?: string;
  userId?: string;
  bootnode?: boolean;
  host?: string;
  ipv4?: string;
  ipv6?: string;
  privateIpv4?: string;
  privateIpv6?: string;
  description?: string;
  role: string;
  status: string;
  config?: { [key: string]: any };
}

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
