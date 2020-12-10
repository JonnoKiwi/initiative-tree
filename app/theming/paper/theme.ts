import { colors } from '../../theme'
import { DefaultTheme } from 'react-native-paper'

export default {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: '#03dac4', // TODO Add color to `colors` for `accent` and `secondary`
    background: colors.background,
    text: colors.text,
  },
}
