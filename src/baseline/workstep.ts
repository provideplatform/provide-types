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

import { Participant } from '.'
import { Model } from '../model'
import { Prover } from '../privacy/prover'

// Workstep is a baseline workflow context
export type Workstep = Model & {
	id: string
	created_at: string
  name: string
  cardinality: number
  deployed_at: string
  metadata: {
    prover: {
      name: string
      identifier: string
      provider: string
      proving_scheme: string
      curve: string
    }
    mapping_model_id: string
  }
  prover_id: string
  require_finality: boolean
  status: string
  workflow_id: string
  workstep_id: string
	prover: Prover
	proverId: string
	participants: Participant[]
}
