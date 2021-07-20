import { ProtocolMessage } from '.';
import { Model } from '../model';

// Message is a proxy-internal wrapper for protocol message handling
export type BaselineMessage = Model & {
	baselineId: string;
	messageId: string;
	payload: any;
	protocolMessage: ProtocolMessage;
	status: string;
	type: string;
};
