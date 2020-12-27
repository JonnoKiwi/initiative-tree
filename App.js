// This is the first file that ReactNative will run when it starts up.
//
// We jump out of here immediately and into our main entry point instead.
//
// It is possible to have React Native load our main module first, but we'd have to
// change that in both AppDelegate.m and MainApplication.java.  This would have the
// side effect of breaking other tooling like mobile-center and react-native-rename.
//
// It's easier just to leave it here.
import 'react-native-get-random-values'
import App from './app/app.tsx'
import { SHOW_STORYBOOK } from '@env'
// Should we show storybook instead of our app?
let RootComponent = App
if (__DEV__ && SHOW_STORYBOOK === 'true') {
  // Only include Storybook if we're in dev mode
  const { StorybookUIRoot } = require('./storybook')
  RootComponent = StorybookUIRoot
}

export default RootComponent
