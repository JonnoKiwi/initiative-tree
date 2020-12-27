import { createRestSagas, createRestReducerHandlers, createRestActions } from '@delvefore/sagasauce'
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { call, put, takeLatest, ForkEffect, select } from 'redux-saga/effects'
import R from 'ramda'

/**
 */
const INITIAL_STATE = Immutable({
  data: [],
  isPending: false,
  errors: null,
})

/** ------------ Actions: Types and Creators --------- */
const RestActions = createRestActions('characters')
const Actions = createActions({
  resetRolls: null
})

// Add Types and Creators beyond the REST ones only. This is here until SagaSauce has an easy way of adding Types
const Types = {
  ...Actions.Types,
  ...RestActions.Types,
}
const Creators = {
  ...Actions.Creators,
  ...RestActions.Creators
}

const createDispatchers = (dispatch) => {
  return {
    resetRolls: () => {
      dispatch(Creators.resetRolls())
    },
    ...RestActions.createDispatchers(dispatch)
  }
}

/** ------------ Actions: Sagas --------- */
const SagaGenerators = {
  /**
   * We may move this to be the default feature of updateData
   * @param api
   * @param action
   */
  [Types.RESET_ROLLS]: function * resetRollsGenerator(api, action) {
    const state = yield select()
    const response = yield call(
      api.characters.updateData,
      action.data || state.characters.data,
      R.omit(['type', 'data'], action)
    )
    if (response.ok) {
      const data = R.path(['data', 'data'], response)
      console.log(data)
      yield put(Creators.updateDataSuccess(data))
    } else {
      yield put(
        Creators.updateDataFailure(
          R.path(['data', 'errors'], response) || ['Error getting data']
        )
      )
    }
  }
}
const createSagas = (api) => {
  const restSagas: ForkEffect[] = createRestSagas(api.characters, RestActions)
  return [
    ...restSagas,
    takeLatest(Types.RESET_ROLLS, SagaGenerators[Types.RESET_ROLLS], api)
  ]
}

/** ------------ Map Reducers  --------- */
const Reducers = createReducer(INITIAL_STATE, {
  [Types.RESET_ROLLS]: (state = INITIAL_STATE) => {
    let data = state.data
    if (Array.isArray(state.data)) {
      data = data.map((item) => {
        return {
          ...item,
          roll: 0
        }
      })
    }
    return {
      ...state,
      data
    }
  },
  ...createRestReducerHandlers(RestActions.Types),
})

export default {
  Types,
  Reducers,
  Creators,
  createSagas,
  createDispatchers,
}
