import React, { useState, useCallback, useEffect } from 'react'
import { TextInput, List, Avatar, Text } from 'react-native-paper'
import { View, ViewStyle } from 'react-native'
import { Character } from '../../state/Models'

const avatarStyle: ViewStyle = {
  marginRight: 24,
}

export default function Editor(props) {
  const character: Character = props.character
  const [name, setName] = useState(String(character.name))
  const [dexterity, setDexterity] = useState(String(character.dexterity))
  const [modifiers, setModifiers] = useState(String(character.modifiers))
  const onSave = () => {
    props.onChange({
      ...character,
      name,
      dexterity,
      modifiers
    })
  }

  return (
    <List.Section>
      <List.Item
        title='Name'
        right={() => (
          <TextInput
            clearTextOnFocus
            value={character.name}
          />
        )}
      />
      <List.Item
        title='Dexterity'
        right={() => (
          <TextInput
            clearTextOnFocus
            value={character.dexterity}
          />
        )}
      />
      <List.Item
        title={character.modifiers}
        right={() => (
          <TextInput
            clearTextOnFocus
            value={character.modifiers}
          />
        )}
      />
    </List.Section>
  )
}
