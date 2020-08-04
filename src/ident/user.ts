import { Model } from '../model';

export type User = Model & {
  applicationId?: string;
  name?: string;
  firstName: string;
  lastName: string;
  email: string;
  permission?: number;
  privacyPolicyAgreedAt?: string;
  termsOfServiceAgreedAt?: string;
};
