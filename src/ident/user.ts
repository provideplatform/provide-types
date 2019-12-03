import { Model } from "../model";

export type User = {
  applicationId?: string;
  name: string;
  email: string;
  privacyPolicyAgreedAt?: string;
  termsOfServiceAgreedAt?: string;
} & Model;
