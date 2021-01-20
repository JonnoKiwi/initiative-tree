import * as colors from 'react-native-paper/src/styles/colors'
interface TextPalette {
  primary: string
  secondary: string
  disclaimer: string
  error: string
  warning: string
  info: string
}
interface Palette {
  text: TextPalette
  transparent: string
  background: string
  line: string
  surface: string
  primary: string
  secondary: string
  accent: string
  error: string
  warning: string
  info: string
  success: string
}
export const DarkPalette: Palette = {
  background: '#121212',
  transparent: 'rgba(0, 0, 0, 0)',
  line: '#e6e6e6',
  surface: '#363636',
  primary: '#27E100',
  secondary: '#30412B',
  accent: colors.green400,
  error: '#dd3333',
  info: '#272adb',
  warning: '#ddc42f',
  success: '#27E100',
  text: {
    primary: '#ffffff',
    secondary: '#363636',
    disclaimer: '#939AA4',
    error: '#ffffff',
    warning: '#ffffff',
    info: '#ffffff'
  }
}
export const LightPalette: Palette = {
  background: '#bebdbd',
  transparent: 'rgba(0, 0, 0, 0)',
  line: '#e6e6e6',
  surface: '#d4d4d4',
  primary: '#27E100',
  secondary: '#30412B',
  accent: '#81EDE2',
  error: '#dd3333',
  info: '#272adb',
  warning: '#ddc42f',
  success: '#27E100',
  text: {
    primary: '#000000',
    secondary: '#1f1f1f',
    disclaimer: '#45454c',
    error: '#ffffff',
    warning: '#ffffff',
    info: '#ffffff'
  }
}
