import React from 'react'
import {TextInput, List, Avatar, IconButton} from 'react-native-paper'
import { ViewStyle } from 'react-native'
const avatarStyle: ViewStyle = {
  marginRight: 24,
}
export const CharacterRoll = (props) => {
  const {
    name,
    avatar,
    roll,
    onRollChange
  } = props
  return (
    <List.Item
      title={`${name}`}
      left={() => (
        <Avatar.Image source={{ uri: avatar.thumbnail }} size={48} style={avatarStyle} />
      )}
      right={() => (
        <TextInput
          value={roll}
          onChangeText={(value) => onRollChange(value)}
        />
      )}
    />
  )
}

export default function CharactersRolls(props) {
  const {
    users
  } = props

  return (
    <List.Section>
      {users.map(CharacterRoll)}
    </List.Section>
  )
}
