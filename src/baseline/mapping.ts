import { Model } from '../model';

export type Mapping = Model & {
  models: MappingModel[];
  description?: string;
  name: string;
  type: string;
  workgroupId: string;
}

export type MappingModel = Model & {
  description?: string;
  fields: MappingField[];
  primaryKey: string;
  standard?: string;
  type: string;
}

export type MappingField = Model & {
  defaultValue?: any;
  isPrimaryKey?: boolean;
  name: string;
  description?: string;
  type: string;
}

