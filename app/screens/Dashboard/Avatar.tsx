import React from 'react'
import { Avatar as AvatarPaper } from 'react-native-paper'
import { ViewStyle } from 'react-native'
import theme from '../../theming/paper/theme'
const defaultImage = require('./default-avatar.png')
const avatarStyle: ViewStyle = {
  marginRight: 24,
}
export default function Avatar({ avatar }) {
  const image = (avatar === undefined) ? defaultImage : { uri: avatar.thumbnail }

  return (
    <AvatarPaper.Image theme={ theme } source={ image } size={48} style={avatarStyle} />
  )
}
