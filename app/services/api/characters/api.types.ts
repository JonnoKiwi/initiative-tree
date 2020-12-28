import { GeneralApiProblem } from '../api-problem'
import { Character as _Character } from '../../../state/Models'

export type Character = _Character
export type GetListResult = { kind: 'ok'; data: Character[] } | GeneralApiProblem
export type GetSingleResult = { kind: 'ok'; data: Character[] } | GeneralApiProblem
