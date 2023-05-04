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

import { Model } from '../model'

export type Mapping = Model & {
  models: MappingModel[]
  description?: string
  name: string
  refMappingId?: string
  type: string
  workgroupId: string
}

export type MappingModel = Model & {
  description?: string
  fields: MappingField[]
  primaryKey: string
  refModelId?: string
  standard?: string
  type: string
}

export type MappingField = Model & {
  defaultValue?: any
  isPrimaryKey?: boolean
  name: string
  description?: string
  refFieldId?: string
  type: string
}
