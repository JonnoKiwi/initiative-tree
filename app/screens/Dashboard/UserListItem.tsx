import React from 'react'
import { List, IconButton, useTheme } from 'react-native-paper'
import AvatarIcon from './AvatarIcon'

export default function UserListItem({ id, name, initiative, avatar, onPress }) {
  const { colors } = useTheme()
  return (
    <List.Item
      title={`${name}`}
      description={initiative}
      descriptionNumberOfLines={1}
      left={() => (
        <AvatarIcon avatar={avatar} />
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
