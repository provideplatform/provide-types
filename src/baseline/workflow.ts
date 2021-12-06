import { Participant, Workstep } from '.';
import { Model } from '../model';

// Workflow is a baseline workflow context
export type Workflow = Model & {
	id: string,
	created_at: string,
	status: string,
	version: string,
	name: string,
	participants: Participant[];
	workgroup_id: string,
	shield: string;
	worksteps: Workstep[];
    	workflow_id: string
}
