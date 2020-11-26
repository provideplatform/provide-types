import { Model } from '../model';

export type BillingAccount = Model & {
  userId: string;
  nickname?: string;
  kycProvider?: string;
  kycApplicationId?: string;
  moneyServiceProvider?: string;
  identifier?: string;
  address?: string;
  verified: boolean;
};

export type PaymentMethod = Model & {
  userId: string;
  billingAccountId?: string;
  nickname?: string;
  brand?: string;
  expMonth?: number;
  expYear?: number;
  last4?: string;
  metadata?: { [key: string]: any };
};

export type RawPaymentMethod = Model & {
  nickname?: string;
  number?: string;
  expMonth?: number;
  expYear?: number;
  cvc?: string;
};
