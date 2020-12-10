import { colors } from '../../theme'
import { DarkTheme } from 'react-native-paper'

export default {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    accent: '#03dac4', // TODO Add color to `colors` for `accent` and `secondary`
    background: colors.background,
    text: colors.text,
  },
}
