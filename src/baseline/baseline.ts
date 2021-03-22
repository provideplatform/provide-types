import { Model } from '../model';

export type BaselineResponse = Model & {
  baselineId: string;
  opcode?: string;
  identifier?: string;
  type?: string;
  payload?: BaselineResponsePayload;
};

export type BaselineResponsePayload = Model & {
  proof: string;
  witness?: { [key: string]: any };
};
