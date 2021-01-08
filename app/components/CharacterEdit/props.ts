import { ViewStyle } from 'react-native'
import { Character } from '../../state/Models'

/**
 * The properties you can pass to FormRow.
 */
export interface Props {
  character: Character
  onChange: any
  /**
   * Override the container style... useful for margins and padding.
   */
  style?: ViewStyle | ViewStyle[]
}
