import { LightPalette, DarkPalette } from '../palette'
import { SPACING } from '../spacing'
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperLightTheme } from 'react-native-paper'
import { Theme } from 'react-native-paper/src/types'
import { Theme as NavigationTheme } from '@react-navigation/native'

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

export const DarkTheme = {
  ...PaperDarkTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    ...PaperDarkTheme.colors,
    primary: DarkPalette.primary,
    accent: DarkPalette.accent,
    background: DarkPalette.background,
    surface: DarkPalette.surface,
    text: DarkPalette.text.primary
  },
  spacing: SPACING
}

export const LightTheme = {
  ...PaperLightTheme,
  dark: false,
  mode: 'adaptive',
  colors: {
    ...PaperLightTheme.colors,
    primary: LightPalette.primary,
    accent: LightPalette.accent,
    background: LightPalette.background,
    surface: LightPalette.surface,
    text: LightPalette.text.primary
  },
  spacing: SPACING
}

export const mapToNavigationTheme = (theme:Theme):NavigationTheme => {
  return {
    dark: theme.dark,
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.surface,
      text: theme.colors.text,
      border: theme.colors.surface,
      notification: theme.colors.primary
    }
  }
}
