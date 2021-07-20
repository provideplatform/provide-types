import { Workflow } from '.';
import { Model } from '../model';

// Context represents a collection of baseline Record instances in the context of a workflow
export type Context = Model & {
	baselineId: string;
  records: Record[];
  workflow: Workflow;
  workflowId: string;
};

// Record represents a link between an object in the internal system of record
// and the external Context
export type Record = Model & {
  baselineId: string;
  context: Context;
  contextId: string;
  type: string;
};
