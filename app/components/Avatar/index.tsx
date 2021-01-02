import React from 'react'
import { Avatar as AvatarPaper } from 'react-native-paper'
import { ViewStyle } from 'react-native'
import R from 'ramda'

const DEFAULT_IMAGE = require('./default-avatar.png')
const AVATAR_STYLE: ViewStyle = {
  marginRight: 24,
}
const EMPTY_REGX = /^\s*$/

export default function Avatar(props) {
  const { thumbnail, size = 48 } = props
  const image = R.is(String, thumbnail) && !EMPTY_REGX.test(thumbnail) ? { uri: thumbnail } : DEFAULT_IMAGE

  return (
    <AvatarPaper.Image source={ image } size={size} style={AVATAR_STYLE} {...props} />
  )
}
