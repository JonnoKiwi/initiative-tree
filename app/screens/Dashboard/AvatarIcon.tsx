import React from 'react'
import { Avatar } from 'react-native-paper'
import { ViewStyle } from 'react-native'
import theme from '../../theming/paper/theme'
const defaultImage = require('./default-avatar.png')
const avatarStyle: ViewStyle = {
  marginRight: 24,
}
export default function AvatarIcon({ icon }) {
  const image = (icon === undefined) ? defaultImage : { uri: icon.thumbnail }

  return (
    <Avatar.Image theme={ theme } source={ image } size={48} style={avatarStyle} />
  )
}
