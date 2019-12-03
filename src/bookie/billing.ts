import { Model } from "../model";

export class BillingAccount extends Model {
  userId: string | undefined;
  nickname?: string;
  kycProvider?: string;
  kycApplicationId?: string;
  moneyServiceProvider?: string;
  identifier?: string;
  address?: string;
  verified: boolean | undefined;
}

export class PaymentMethod extends Model {
  userId: string | undefined;
  billingAccountId?: string;
  nickname?: string;
  brand?: string;
  expMonth?: number;
  expYear?: number;
  last4?: string;
  metadata?: { [key: string]: any };
}

export class RawPaymentMethod extends Model {
  nickname?: string;
  number?: string;
  expMonth?: number;
  expYear?: number;
  cvc?: string;
}
