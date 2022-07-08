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

export type Network = Model & {
  applicationId?: string
  networkId?: string
  userId?: string
  name: string
  description?: string
  enabled: boolean
  chainId?: string
  config?: { [key: string]: any }
  stats?: NetworkStats
}

export type NetworkStats = {
  block?: number
  chainId?: string
  height?: number
  lastBlockAt?: number
  peerCount?: number
  protocolVersion?: string
  state?: string
  syncing?: boolean
  meta?: { [key: string]: any }
} & Model
