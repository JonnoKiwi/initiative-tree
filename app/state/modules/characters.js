import { createRestSagas, createRestReducerHandlers, createRestActions } from '@delvefore/sagasauce'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/**
 */
const INITIAL_STATE = Immutable({
  data: [],
  isPending: false,
  errors: null,
})

/** ------------ Actions: Types and Creators --------- */
const Actions = createRestActions('characters')
const Types = Actions.Types
const Creators = Actions.Creators
const createDispatchers = Actions.createDispatchers

/** ------------ Actions: Sagas --------- */
const createSagas = (api) => {
  return createRestSagas(api.characters, Actions)
}

/** ------------ Map Reducers  --------- */
const Reducers = createReducer(INITIAL_STATE, {
  ...createRestReducerHandlers(Types),
})

export default {
  Types,
  Reducers,
  Creators,
  createSagas,
  createDispatchers,
}
