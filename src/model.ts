import { BigNumber as BigInt } from 'ethers'

export type BigNumber = BigInt

export interface Error {
  message?: string
  status?: number
}

export interface Model {
  id?: string
  createdAt?: string
  errors?: Error[]
}
