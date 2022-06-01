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
import { User } from '../ident/user';

export type KycApplication = Model & {
  applicationId?: string;
  userId?: string;
  provider?: string;
  identifier?: string;
  type?: string;
  status?: string;
  name?: string;
  description?: string;
  params?: KycApplicationParams;
  hidden: boolean;
  providerRepresentation?: { [key: string]: any };
  similarKycApplications?: KycApplication[];
  similarUsers?: User[];
};

export type KycApplicationParams = Model & {
  affiliateId?: string;
  params: { [key: string]: any };
  idNumber?: string;
  dateOfBirth?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  idPhoto?: string;
  idPhotoBack?: string;
  selfie?: string;
  selfieVideo?: string;
  ssn?: string;
  type?: string;
  webhookUrl?: string;
};
