import { Model } from "../model";

export class User extends Model {
  applicationId?: string;
  name: string | undefined;
  email: string | undefined;
  privacyPolicyAgreedAt?: string;
  termsOfServiceAgreedAt?: string;
}
