import { DarkPalette, SPACING, spacing } from '../../theme'
import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: DarkPalette.transparent,
  paddingHorizontal: SPACING.MEDIUM,
}
const BOLD: TextStyle = { fontWeight: 'bold' }

const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: 'center',
  marginBottom: SPACING.LARGE,
}
const TAGLINE: TextStyle = {
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[4] + spacing[1],
}
const IGNITE: ImageStyle = {
  marginVertical: spacing[6],
  alignSelf: 'center',
}
const LOVE_WRAPPER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'center',
}
const LOVE: TextStyle = {
  color: '#BAB6C8',
  fontSize: 15,
  lineHeight: 22,
}
const HEART: ImageStyle = {
  marginHorizontal: spacing[2],
  width: 10,
  height: 10,
  resizeMode: 'contain',
}
const HINT: TextStyle = {
  fontSize: 12,
  lineHeight: 15,
  marginVertical: spacing[2],
}

export default {
  FULL,
  HINT,
  HEART,
  LOVE,
  LOVE_WRAPPER,
  IGNITE,
  TAGLINE,
  BOLD,
  TITLE,
  CONTAINER,
}
