/*
 * Copyright 2017-2022 Provide Technologies Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
