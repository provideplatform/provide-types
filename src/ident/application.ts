import { Model } from "../model";

import { Organization } from "./organization";

export class Application extends Model {
  networkId: string | undefined;
  userId: string | undefined;
  name: string | undefined;
  description?: string | undefined;
  config?: { [key: string]: any };
  hidden: boolean | undefined;

  organizations?: Organization[] | undefined;
}
