import { Model } from '../model';
import { Facility } from './facility';

enum TokenStandard {
  Erc20 = "ERC-20",
  Erc721 = "ERC-721",
}

export type TokenizationPolicy = Model & {
  applicationId?: string;
  userId?: string;
  asset: string;
  tokenStandard: TokenStandard;
  shieldContractAddress: string;
  facilities: Facility[];
};
