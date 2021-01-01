import * as React from 'react'
import { ViewStyle } from 'react-native'

/**
 * The properties you can pass to FormRow.
 */
export interface ContainerProps {
  /**
   * Children components.
   */
  children: React.ReactNode

  preset?: 'form'

  width?: number | string

  height?: number | string

  ['stretch-items']?: boolean

  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'

  /**
   * Override the container style... useful for margins and padding.
   */
  style?: ViewStyle | ViewStyle[]

  column?: boolean

  reverse?: boolean

  space?: 'evenly' | 'between' | 'around'
}
