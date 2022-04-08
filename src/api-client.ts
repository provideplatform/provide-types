import { Model } from './model'

export type ApiClientResponse<T extends Model> =
  | T
  | PaginatedResponse<T>
  | Promise<any>

export type PaginatedResponse<T> = {
  results: T[]
  totalResultsCount: number
}

export interface ApiClientOptions {
  preventAutoCase: boolean
}
