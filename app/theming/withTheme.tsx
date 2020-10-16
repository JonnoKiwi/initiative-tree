import React from 'react'
import { Root } from 'native-base'
import StyleProvider from './StyleProvider'

/**
 * Currently this only supports NativeBase
 *
 * TODO Support UI Library "React Native Paper"
 *
 * @param Component
 */
export default (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => (
    <StyleProvider>
      <Root>
        <Component {...props} />
      </Root>
    </StyleProvider>
  )
}
