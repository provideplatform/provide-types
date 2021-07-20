import { Participant, Workstep } from '.';
import { Model } from '../model';

// Workflow is a baseline workflow context
export type Workflow = Model & {
	participants: Participant[];
	shield: string;
	worksteps: Workstep[];
}
