import { Model } from '../model';

export type Payment = Model & {
  applicationId?: string;
  organizationId?: string[];
  userId?: string;
  address?: string;
  description?: string;
  type: string;
  params: { [key: string]: any };
  provider: string;
  value: number;
};
