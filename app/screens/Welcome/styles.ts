import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { DarkPalette, spacing, typography } from '../../theme'

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: DarkPalette.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: DarkPalette.text.primary,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: 'bold' }
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
const FOOTER: ViewStyle = { backgroundColor: DarkPalette.surface }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export default {
  FOOTER,
  FOOTER_CONTENT,
  CONTAINER,
  CONTENT,
  ALMOST,
  BOLD,
  TREE,
  TEXT,
  TITLE,
  TITLE_WRAPPER,
  FULL,
}
