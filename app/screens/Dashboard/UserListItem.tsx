import React from 'react'
import { List, IconButton, Avatar, useTheme } from 'react-native-paper'
import { ViewStyle } from 'react-native'
const avatarStyle: ViewStyle = {
  marginRight: 24,
}
export default function UserListItem({ id, name, initiative, avatar, onPress }) {
  const { colors } = useTheme()
  return (
    <List.Item
      title={initiative}
      description={`${name}`}
      descriptionNumberOfLines={1}
      left={() => (
        <Avatar.Image source={{ uri: avatar.thumbnail }} size={48} style={avatarStyle} />
      )}
      right={() => (
        <IconButton
          icon="dots-vertical"
          color={colors.primary}
          size={20}
          onPress={() => onPress({ name, initiative, avatar, id })}
        />
      )}
    />
  )
}
