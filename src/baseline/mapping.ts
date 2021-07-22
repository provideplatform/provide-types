import { Model } from '../model';

export type MappingField = Model & {
  defaultValue?: any;
  isPrimaryKey?: boolean;
  name: string;
  type: string;
}

export type MappingModel = Model & {
  fields: MappingField[];
  primaryKey: string;
  type: string;
}

export type Mapping = Model & {
  models: MappingModel[];
  metadata?: { [key: string]: any };
  type: string;
};
