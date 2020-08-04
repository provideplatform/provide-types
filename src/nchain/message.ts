import { Model } from "../model";

import { Transaction } from "./transaction";

export type MessageData = Model & {
  dataUrl?: string;
  hash?: string;
  modifiedAt?: string;
  filename?: string;
  size?: number;
  type?: string;
}

export type Message = Model & {
  data?: MessageData;
  sender?: string;
  timestamp?: string;
  tx?: Transaction;
}
