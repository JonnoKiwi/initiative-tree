/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your ExternalNavigator) which the user
 * will use once logged in.
 */
import React from 'react'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoggedInNavigator from './LoggedInNavigator'
import { ExternalNavigator } from './ExternalNavigator'
import { DarkTheme, LightTheme, mapToNavigationTheme } from '../theme'
import { Provider as PaperProvider } from 'react-native-paper'
import { useSelector } from 'react-redux'

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type RootParamList = {
  ExternalStack: undefined
  LoggedInStack: undefined
}

const Stack = createStackNavigator<RootParamList>()

const rootStackScreenOptions = {
  headerShown: false,
  gestureEnabled: true,
}

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={rootStackScreenOptions}
    >
      <Stack.Screen name="ExternalStack" component={ExternalNavigator} />
      <Stack.Screen name="LoggedInStack" component={LoggedInNavigator} />
    </Stack.Navigator>
  )
}

export const RootNavigatorView = (props, ref) => {
  const useDarkTheme = useSelector(state => state.preferences.data.useDarkTheme)
  const theme = useDarkTheme ? DarkTheme : LightTheme
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={mapToNavigationTheme(theme)} {...props} ref={ref}>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  )
}
export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
  >(RootNavigatorView)

RootNavigator.displayName = 'RootNavigator'
