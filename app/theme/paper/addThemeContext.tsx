import React from 'react'
import { Provider } from 'react-native-paper'
import { LightTheme, DarkTheme } from './theme'
import { useSelector } from 'react-redux'

/**
 *
 * @param App
 */
export default (App) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const useDarkTheme = useSelector(state => state.preferences.data.useDarkTheme)
    const theme = useDarkTheme ? DarkTheme : LightTheme
    return (
      <Provider theme={theme}>
        <App {...props} />
      </Provider>
    )
  }
}
