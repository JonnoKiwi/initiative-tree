import React from 'react'
import { List, IconButton, useTheme } from 'react-native-paper'
import Index from '../../components/Avatar'

export default function UserListItem({ id, name, initiative, avatar, onPress }) {
  const { colors } = useTheme()
  return (
    <List.Item
      title={initiative}
      description={`${name}`}
      descriptionNumberOfLines={1}
      left={() => (
        <Index thumbnail={avatar} />
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
