import { Model } from '../model';

// Participant is a party to a baseline workgroup or workflow context
export type Participant = Model & {
  address: string;
  metadata?: { [key: string]: any };
  apiEndpoint: string;
  messagingEndpoint: string;
};
