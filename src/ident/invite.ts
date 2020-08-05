import { Model } from '../model';

export type Invite = Model & {
  applicationId: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  invitorId: string;
  invitorName: string;
  organizationId: string;
  organizationName: string;
  permissions: number;
  params: { [key: string]: any };
}
