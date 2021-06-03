import { Model } from '../model';

enum FacilityType {
  Dex = "dex",
  Cex = "cex",
  Bank = "bank"
}

export type Agreement = Model & {
  billingAccountId: string;
  facilityId: string;
  pdf?: Uint8Array;
}

export type Facility = Model & {
  applicationId?: string;
  organizationId?: string;
  userId?: string;
  type: FacilityType;
  name: string;
  description: string;
  agreements?: Agreement[];
};