import { Participant, Workflow } from '.';
import { Model } from '../model';

// Workgroup is a baseline workgroup context
export type Workgroup = Model & {
	participants: Participant[];
	workflows: Workflow[];

	privacyPolicy: any;
	securityPolicy: any;
	tokenizationPolicy: any;
}
