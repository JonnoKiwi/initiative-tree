import { all, takeLatest, fork } from 'redux-saga/effects'

/** ------------ Modules ----------- */
import { makeSagas } from '../modules'

/* ------------- Types ------------- */
import { Types as StartupTypes } from '../modules/Startup'

/* ------------- Sagas ------------- */
import { startup } from './Startup'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */
export const createRoot = ({ api }) => {
  return function* root() {
    yield all(
      [
        fork(startup),
        // some sagas only receive an action
        takeLatest(StartupTypes.STARTUP, startup),
      ].concat(makeSagas(api)),
    )
  }
}

export default createRoot
