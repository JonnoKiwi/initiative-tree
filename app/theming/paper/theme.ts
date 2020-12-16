import { colors } from '../../theme'
import { DarkTheme } from 'react-native-paper'

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
}
