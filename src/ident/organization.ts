import { Model } from "../model";

import { User } from "./user";

export class Organization extends Model {
  name: string | undefined;
  userId: string | undefined;
  description: string | undefined;
  permissions: number | undefined;

  users?: User[] | undefined;
}
