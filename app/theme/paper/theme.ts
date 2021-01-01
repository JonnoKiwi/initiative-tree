import { colors } from '../colors'
import { SPACING } from '../spacing'
import { DarkTheme } from 'react-native-paper'

/**
 * For Type Checking
 */
declare global {
  namespace ReactNativePaper {
    interface Theme {
      spacing: SPACING
    }
  }
}

export default {
  ...DarkTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    background: colors.background,
    surface: colors.surface,
    text: colors.text,
  },
  spacing: SPACING
}
