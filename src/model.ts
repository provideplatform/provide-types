import { BigNumber as BigInt } from "ethers/utils";

export type BigNumber = BigInt;

export type Error = {
  message?: string;
  status?: number;
};

export type Model = {
  id?: string;
  createdAt?: string;
  errors?: Error[];
};
