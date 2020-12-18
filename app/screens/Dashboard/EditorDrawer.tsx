import React from 'react'
import { Drawer, TextInput, List, Avatar } from 'react-native-paper'
import { ViewStyle } from 'react-native'
const avatarStyle: ViewStyle = {
  marginRight: 24,
}
export default function EditorDrawer({ id, avatar, name, initiative, diceRoll, bonus }) {
  const [text, setText] = React.useState(name)
  const [roll, setRoll] = React.useState(diceRoll)
  const [number, setNumber] = React.useState(bonus)

  return (
    <Drawer.Section>
      <List.Section>
        <Avatar.Image source={{ uri: avatar.thumbnail }} size={48} style={avatarStyle} />
        <List.Subheader>Edit Character</List.Subheader>
        <TextInput
          value={text}
          onChange={text => setText(text)}
        />
        <List.Subheader>Dice Roll</List.Subheader>
        <TextInput
          value={roll}
          onChange={roll => setRoll(roll)}
        />
        <List.Subheader>Initiative Bonus</List.Subheader>
        <TextInput
          value={number}
          onChange={number => setNumber(number)}
        />
      </List.Section>
    </Drawer.Section>
  )
}
