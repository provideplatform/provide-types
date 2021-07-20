import { Participant } from '.';
import { Model } from '../model';

// Config represents the proxy configuration
export type Config = Model & {
  counterparties: Participant[];
  env?: { [key: string]: any };
  networkId: string;
  organizationAddress: string;
  organizationId: string;
  organizationRefreshToken: string;
  registryContractAddress: string;
};
