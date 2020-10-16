/**
 */
import { StyleProvider } from 'native-base'
import variables from '@app/themes/variables/material' // TODO Offer a clear "main" / default theme selection
import getTheme from '@app/themes/components'

export default class Provider extends StyleProvider {
  static defaultProps = {
    style: getTheme(variables),
  }
}
