import React from 'react'
import { List, Button, Text, Avatar } from 'react-native-paper'
import { ViewStyle } from 'react-native'
const avatarStyle: ViewStyle = {
  marginRight: 24,
}
export default function UserListItem({ item }) {
  return (
    <List.Item
      title={`${item.name.first} ${item.name.last}`}
      description={item.gender}
      descriptionNumberOfLines={1}
      left={() => (
        <Avatar.Image source={{ uri: item.picture.thumbnail }} size={48} style={avatarStyle} />
      )}
      right={() => (
        <Button>
          <Text>View</Text>
        </Button>
      )}
    />
  )
}
