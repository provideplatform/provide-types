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

import { LoadBalancer } from './loadbalancer'
import { Model } from '../model'
import { Node } from './node'

export type Connector = Model & {
  networkId: string
  applicationId?: string
  organizationId?: string
  name: string
  type: string
  status: string
  description?: string
  config?: ConnectorConfig
  accessedAt?: string

  details?: ConnectorDetails

  loadBalancers?: LoadBalancer[]
  nodes?: Node[]
}

export interface ConnectorConfig {
  container: string
  credentials?: { [key: string]: any }
  engineId?: string
  env?: { [key: string]: any }
  providerId?: string
  region?: string
  role?: string
  targetId?: string
}

export interface ConnectorDetails {
  page?: number
  rpp?: number
  data: any
}
