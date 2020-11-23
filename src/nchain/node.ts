import { Model } from '../model';

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
};

export type Log = Model & {
  timestamp: number;
  ingestTimestamp: number;
  message: string;
};

export type LogsResponse = Model & {
  logs: Log[];
  prevToken?: string;
  nextToken?: string;
};
