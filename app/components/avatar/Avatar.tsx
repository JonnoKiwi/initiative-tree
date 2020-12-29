import React from 'react'
import { Avatar as AvatarPaper } from 'react-native-paper'
import { ViewStyle } from 'react-native'
import theme from '../../theme/paper/theme'
import R from 'ramda'
const defaultImage = require('./default-avatar.png')
const avatarStyle: ViewStyle = {
  marginRight: 24,
}
export default function Avatar({ thumbnail }) {
  const image = R.is(String, thumbnail) && thumbnail !== '' ? { uri: thumbnail } : defaultImage

  return (
    <AvatarPaper.Image theme={ theme } source={ image } size={48} style={avatarStyle} />
  )
}
