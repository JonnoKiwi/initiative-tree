import { GeneralApiProblem } from '../api-problem'

/**
 * TODO It seems this should be in a different location for defining the Entity structures used in the application instead of tying it to the API.
 */
export interface User {
  id: number
  name: string
}

export type GetListResult = { kind: 'ok'; data: User[] } | GeneralApiProblem
export type GetSingleResult = { kind: 'ok'; data: User } | GeneralApiProblem
