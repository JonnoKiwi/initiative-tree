import { colors, spacing } from '../../theme'
import { ViewStyle } from 'react-native'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: colors.transparent,
  paddingHorizontal: spacing[4],
}

export default {
  FULL,
  CONTAINER
}
