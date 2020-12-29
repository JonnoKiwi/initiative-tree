import React from 'react'
import { Provider } from 'react-native-paper'
import theme from './theme'

/**
 *
 * @param App
 */
export default (App) => {
  // eslint-disable-next-line react/display-name
  return (props) => (
    <Provider theme={theme}>
      <App {...props} />
    </Provider>
  )
}
