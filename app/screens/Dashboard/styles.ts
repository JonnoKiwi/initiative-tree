import { colors, spacing } from '../../theme'
import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: colors.transparent,
  paddingHorizontal: spacing[4],
}
const BOLD: TextStyle = { fontWeight: 'bold' }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: 'center',
  letterSpacing: 1.5,
}
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: 'center',
  marginBottom: spacing[5],
}
const TAGLINE: TextStyle = {
  color: '#BAB6C8',
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
  color: '#BAB6C8',
  fontSize: 12,
  lineHeight: 15,
  marginVertical: spacing[2],
}

export default {
  FULL,
  HINT,
  HEART,
  HEADER_TITLE,
  HEADER,
  LOVE,
  LOVE_WRAPPER,
  IGNITE,
  TAGLINE,
  BOLD,
  TITLE,
  CONTAINER,
}
