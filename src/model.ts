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
      this[toCamelCase(key)] = value;
    }
  }
}

function isObject(o: any): boolean {
  return o === Object(o) && !Array.isArray(o) && typeof o !== "function";
}

function toCamelCase(str: string): string {
  // tslint:disable-next-line: typedef
  return str.replace(/([-_][a-z])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace("-", "")
      .replace("_", "");
  });
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
