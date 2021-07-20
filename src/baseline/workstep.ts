import { Participant } from '.';
import { Model } from '../model';
import { Circuit } from '../privacy/circuit';

// Workstep is a baseline workflow context
export type Workstep = Model & {
	circuit: Circuit;
	circuitId: string;
	participants: Participant[];
	requireFinality: boolean;
	workflowId: string;
}
