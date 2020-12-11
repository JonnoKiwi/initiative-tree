import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { colors, spacing, typography } from '../../theme'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: colors.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: colors.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: 'bold' }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: 'center',
  letterSpacing: 1.5,
}
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: 'center',
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: 'center',
}
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: 'italic',
}
const TREE: ImageStyle = {
  alignSelf: 'center',
  marginVertical: spacing[5],
  maxWidth: '100%',
}
const CONTENT: TextStyle = {
  ...TEXT,
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: '#5D2555',
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: colors.primaryDarker }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export default {
  FOOTER,
  FOOTER_CONTENT,
  CONTAINER,
  CONTENT,
  CONTINUE,
  CONTINUE_TEXT,
  ALMOST,
  HEADER,
  HEADER_TITLE,
  BOLD,
  TREE,
  TEXT,
  TITLE,
  TITLE_WRAPPER,
  FULL,
}
