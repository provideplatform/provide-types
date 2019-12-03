import { Model } from "../model";

export type BillingAccount = {
  userId: string;
  nickname?: string;
  kycProvider?: string;
  kycApplicationId?: string;
  moneyServiceProvider?: string;
  identifier?: string;
  address?: string;
  verified: boolean;
} & Model;

export type PaymentMethod = {
  userId: string;
  billingAccountId?: string;
  nickname?: string;
  brand?: string;
  expMonth?: number;
  expYear?: number;
  last4?: string;
  metadata: { [key: string]: any };
} & Model;

export type RawPaymentMethod = {
  nickname?: string;
  number?: string;
  expMonth?: number;
  expYear?: number;
  cvc?: string;
};
