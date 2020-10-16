import setupRootStoreCore from './setupRootStore'
import { rootReducer } from './setupRootStore'
import _connectState from './connect'

export const connectState = _connectState

export { Provider as RootStoreProvider } from 'react-redux'

export const setupRootStore = async () => {
  const result = await setupRootStoreCore()
  return result.store
}

export type RootState = ReturnType<typeof rootReducer>
