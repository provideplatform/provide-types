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

  // marshal to JSON
  public marshal(): string {
    const obj = {};
    for (const [key, value] of Object.entries(this)) {
      if (typeof value !== "undefined" && typeof value !== "function") {
        if (value instanceof Model) {
          obj[toSnakeCase(key)] = JSON.parse(value.marshal());
        } else {
          obj[toSnakeCase(key)] = value;
        }
      }
    }
    return JSON.stringify(obj);
  }

  // unmarshal JSON - this is not recursive yet
  public unmarshal(json: string): void {
    const obj = JSON.parse(json);
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value !== "function") {
        obj[toSnakeCase(key)] = value;
      }
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

function toSnakeCase(str: string): string {
  // tslint:disable-next-line: typedef
  return str.replace(/[A-Z]/g, $1 => {
    return `_${$1.toLowerCase()}`;
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
