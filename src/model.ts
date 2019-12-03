import { BigNumber as BigInt } from "ethers/utils";

export type BigNumber = BigInt;

export type Error = {
  message?: string;
  status?: number;
};

export class Model {
  id?: string;
  createdAt?: string;
  errors?: Error[];

  public unmarshal(json: string): void {
    const obj = JSON.parse(json);
    for (const [key, value] of Object.entries(obj)) {
      if (key in this) {
        this[key] = value;
      }
    }
  }
}

export function factory<T extends Model>(clazz: { new (): T }): T {
  return new clazz();
}

// tslint:disable-next-line: prettier
export function unmarshal<T extends Model>(json: string, clazz: { new (): T }): T {
  const instance = factory(clazz);
  instance.unmarshal(json);
  return instance;
}
