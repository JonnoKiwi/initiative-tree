import React, { useEffect, useState } from 'react'
import { RootStore, setupRootStore, RootStoreProvider } from './tether'

export const withRootState = (App, LoadingComponent = null) => {
  return function WrappedWithRootState(props) {
    const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

    // Kick off initial async loading actions, like loading fonts and RootStore
    useEffect(() => {
      (async () => {
        const store = await setupRootStore()
        setRootStore(store)
      })()
    }, [])

    // Before we show the app, we have to wait for our state to be ready.
    // In the meantime, don't render anything. This will be the background
    // color set in native by rootView's background color. You can replace
    // with your own loading component if you wish.
    // TODO Make a Loading Screen view that works for both Expo and React Native
    if (!rootStore) return LoadingComponent

    return (
      <RootStoreProvider store={rootStore}>
        <App {...props} />
      </RootStoreProvider>
    )
  }
}
