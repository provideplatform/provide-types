import { Model } from "../model";

import { User } from "./user";

export class KycApplication extends Model {
  applicationId?: string;
  userId?: string;
  provider: string | undefined;
  identifier?: string;
  type: string | undefined;
  status: string | undefined;
  name?: string;
  description?: string;
  params?: KycApplicationParams;
  hidden: boolean = false;
  providerRepresentation?: { [key: string]: any };
  similarKycApplications?: KycApplication[];
  similarUsers?: User[];
}

export type KycApplicationParams = {
  affiliateId?: string;
  params: { [key: string]: any };
  idNumber?: string;
  dateOfBirth?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  idPhoto?: string;
  idPhotoBack?: string;
  selfie?: string;
  selfieVideo?: string;
  ssn?: string;
  type?: string;
  webhookUrl?: string;
};
