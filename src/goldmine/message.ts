import { Model } from "../model";

import { Transaction } from "./transaction";

export class MessageData extends Model {
  dataUrl?: string;
  hash?: string;
  modifiedAt?: string;
  filename?: string;
  size?: number;
  type?: string;
}

export class Message extends Model {
  data?: MessageData;
  sender?: string;
  timestamp?: string;
  tx?: Transaction;
}
