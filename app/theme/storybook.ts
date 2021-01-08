import { LightPalette } from './palette'

export default {
  /**
   * Storybook background for Text stories, or any stories where
   * the text color is colors.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  background: LightPalette.primary,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  textColor: LightPalette.text.primary
}
