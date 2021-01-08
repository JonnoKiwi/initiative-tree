import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  data: {
    useDarkTheme: true
  },
  isPending: false,
  errors: null,
})

const Actions = createActions({
  setUseDarkTheme: ['isEnabled'],
  toggleTheme: null
})

const Types = {
  ...Actions.Types
}
const Creators = {
  ...Actions.Creators
}

/** --- REDUCERS  ---- **/
const setDarkTheme = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    data: {
      ...state.data,
      useDarkTheme: action.isEnabled
    }
  }
}
const Reducers = createReducer(INITIAL_STATE, {
  [Types.SET_USE_DARK_THEME]: setDarkTheme,
  [Types.TOGGLE_THEME]: (state, action) => {
    const isCurrentlyEnabled = state.data.useDarkTheme
    return setDarkTheme(state, { ...action, isEnabled: !isCurrentlyEnabled })
  }
})

const createDispatchers = (dispatch) => {
  return {
    useDarkTheme: (data) => {
      dispatch(Creators.setUseDarkTheme({ data }))
    }
  }
}

export default {
  Types,
  Reducers,
  Creators,
  createSagas: () => [],
  createDispatchers,
}
