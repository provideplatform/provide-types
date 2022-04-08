import { Model } from '../model';

export type Mapping = Model & {
  models: MappingModel[];
  description?: string;
  name: string;
  refMappingId?: string;
  type: string;
  workgroupId: string;
}

export type MappingModel = Model & {
  description?: string;
  fields: MappingField[];
  primaryKey: string;
  refModelId?: string;
  standard?: string;
  type: string;
}

export type MappingField = Model & {
  defaultValue?: any;
  isPrimaryKey?: boolean;
  name: string;
  description?: string;
  refFieldId?: string;
  type: string;
}

