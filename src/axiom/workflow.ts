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

import { Participant, Workstep } from '.'
import { Model } from '../model'

// Workflow is a axiom workflow context
export type Workflow = Model & {
  id: string
  created_at: string
  status: string
  version: string
  name: string
  participants: Participant[]
  workgroup_id: string
  shield: string
  worksteps: Workstep[]
  workflow_id: string
}