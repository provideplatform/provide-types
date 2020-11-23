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
