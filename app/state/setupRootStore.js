import configureStore from './configureStore'
import reducers from './reducers'
import creatRootSagas from './sagas'
import { useReactotron } from '@env'
import { combineReducers } from 'redux'
import { createEnvironment } from './environment'

/* ------------- Assemble The Reducers ------------- */
export const rootReducer = combineReducers(reducers)

export default async () => {
  // prepare the environment that will be associated with the RootStore.
  const env = await createEnvironment()
  const reactotron = env.reactotron
  let { store, sagasManager, sagaMiddleware } = configureStore(
    rootReducer,
    creatRootSagas({ api: env.api }),
    { useReactotron },
  )

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default)
      const rootSaga = require('./sagas').default({ api: env.api })
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(rootSaga)
      })
    })
  }

  return { store, reactotron }
}
