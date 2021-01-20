import React from 'react'
import { View, TextInput, TextStyle, ViewStyle } from 'react-native'
import { LightPalette, SPACING, typography } from '../../theme'
import { translate } from '../../i18n'
import { Text } from '../text/text'
import { TextFieldProps } from './text-field.props'
import { mergeAll, flatten } from 'ramda'

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: SPACING.SMALL,
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: LightPalette.text.primary,
  minHeight: 44,
  fontSize: 18,
  backgroundColor: LightPalette.primary,
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = 'default',
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props
  let containerStyle: ViewStyle = { ...CONTAINER, ...PRESETS[preset] }
  containerStyle = enhance(containerStyle, styleOverride)

  let inputStyle: TextStyle = INPUT
  inputStyle = enhance(inputStyle, inputStyleOverride)
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  return (
    <View style={containerStyle}>
      <Text preset="fieldLabel" tx={labelTx} text={label} />
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={LightPalette.text.disclaimer}
        underlineColorAndroid={LightPalette.transparent}
        {...rest}
        style={inputStyle}
        ref={forwardedRef}
      />
    </View>
  )
}
