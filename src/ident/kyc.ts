import { Model } from "../model";

import { User } from "./user";

export type KycApplication = {
  applicationId?: string;
  userId?: string;
  provider: string;
  identifier?: string;
  type: string;
  status: string;
  name?: string;
  description?: string;
  params?: KycApplicationParams;
  hidden: boolean;
  providerRepresentation?: { [key: string]: any };
  similarKycApplications?: KycApplication[];
  similarUsers?: User[];
} & Model;

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
