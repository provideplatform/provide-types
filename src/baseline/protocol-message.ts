import { Model } from '../model';

export const protocolMessageOpcodeBaseline = "BLINE"
export const protocolMessageOpcodeJoin = "JOIN"
export const protocolMessageOpcodeSync = "SYNC"

// ProtocolMessage is a baseline protocol message
// see https://github.com/ethereum-oasis/baseline/blob/master/core/types/src/protocol.ts
export type ProtocolMessage = Model & {
	baselineId: string;
	opcode: string;
	sender: string;
	recipient: string;
	shield: string;
	identifier: string;
	signature: string;
	type: string;
	payload: ProtocolMessagePayload;
};

// ProtocolMessagePayload is a baseline protocol message payload
export type ProtocolMessagePayload = Model & {
	object?: { [key: string]: any };
	proof: string;
	type: string;
	witness: string;
};
