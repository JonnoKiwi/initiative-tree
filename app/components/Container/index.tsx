import React, { ReactElement } from 'react'
import { FlexStyle, View } from 'react-native'
import { ContainerProps } from './props'
import { SPACING } from '../../theme'

export const makeStyles = (props:ContainerProps): FlexStyle => {
  const styles: FlexStyle = {
    flex: 1,
    flexDirection: props.column ? 'column' : 'row',
    justifyContent: 'center',
    alignContent: props['stretch-items'] ? 'stretch' : 'center',
    alignItems: props['stretch-items'] ? 'stretch' : 'center',
    flexWrap: props.wrap || 'wrap'
  }
  /**
   * Form Preset
   */
  if (props.preset === 'form') {
    styles.flexDirection = 'column'
    styles.alignContent = 'flex-start'
    styles.alignItems = 'flex-start'
  }
  if (props.reverse) {
    if (props.column) {
      styles.flexDirection = 'column-reverse'
    } else {
      styles.flexDirection = 'row-reverse'
    }
  }
  if (props.space) {
    if (props.space === 'between') {
      styles.justifyContent = 'space-between'
    } else if (props.space === 'around') {
      styles.justifyContent = 'space-around'
    } else if (props.space === 'evenly') {
      styles.justifyContent = 'space-evenly'
    }
  }
  if (props.width) {
    styles.width = props.width
  }
  if (props.height) {
    styles.height = props.height
  }
  return {
    ...styles,
    ...props.style
  }
}

export default function Container(props: ContainerProps): ReactElement {
  const renderChildren = () => {
    const additionalStyles: FlexStyle = {}
    if (props['stretch-items']) {
      additionalStyles.flex = 1
    }
    if (props.preset === 'form') {
      additionalStyles.marginVertical = SPACING.SMALLER
      additionalStyles.width = '100%'
    }
    return React.Children.map(props.children, (child: ReactElement) => {
      return (React.cloneElement(child, {
        ...child.props,
        style: {
          ...child.props.style,
          ...additionalStyles
        }
      }))
    })
  }
  return (
    <View style={makeStyles(props)}>{renderChildren()}</View>
  )
}
