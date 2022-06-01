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

import { BigNumber, Model } from '../model';

export type Account = Model & {
  networkId?: string;
  walletId?: string;
  applicationId?: string;
  userId?: string;

  address: string;
  hdDerivationPath?: string;
  publicKey?: string;
  privateKey?: string;

  balance?: BigNumber;
  accessAt?: string;
}

export type Wallet = Model & {
  walletId?: string;
  applicationId?: string;
  userId?: string;

  path?: string;
  purpose?: number;
  mnemonic?: string;
  seed?: string;
  publicKey?: string;
  privateKey?: string;
}
