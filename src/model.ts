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

  // this is not recursive
  public unmarshal(json: string): void {
    const obj = JSON.parse(json);
    for (const [key, value] of Object.entries(obj)) {
      this[key] = value;
    }
  }
}

export function factory<T extends Model | Model[]>(clazz: { new (): T }): T {
  return new clazz();
}

// tslint:disable-next-line: prettier
export function unmarshal<T extends Model | Model[]>(json: string, clazz: { new (): T }): T | T[] {
  const val = JSON.parse(json);
  if (val instanceof Array) {
    const arr = [];
    (val as any[]).forEach((item: any) => {
      const inst = factory(clazz);
      (inst as Model).unmarshal(JSON.stringify(item));
      (arr as any[]).push(inst);
    });
    return arr;
  }

  const instance = factory(clazz);
  (instance as Model).unmarshal(json);
  return instance;
}
