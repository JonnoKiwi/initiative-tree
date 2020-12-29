import React from 'react'
import { List, IconButton, useTheme } from 'react-native-paper'
import Avatar from '../../components/avatar/Avatar'

export default function UserListItem({ id, name, initiative, avatar, onPress }) {
  const { colors } = useTheme()
  return (
    <List.Item
      title={initiative}
      description={`${name}`}
      descriptionNumberOfLines={1}
      left={() => (
        <Avatar thumbnail={avatar} />
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
