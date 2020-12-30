import React, { useState } from 'react'
import { TextInput, List, Button, } from 'react-native-paper'
import { View } from 'react-native'
import { Character } from '../../state/Models'

export default function EditorList (props) {
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
    <View>
      <List.Section>
        <List.Item
          title='Name'
          right={() => (
            <TextInput
              value={name}
              onChangeText={setName}
            />
          )}
        />
        <List.Item
          title='Dexterity'
          right={() => (
            <TextInput
              keyboardType='numeric'
              value={dexterity}
              onChangeText={setDexterity}
            />
          )}
        />
        <List.Item
          title={character.modifiers}
          right={() => (
            <TextInput
              keyboardType='numeric'
              value={modifiers}
              onChangeText={setModifiers}
            />
          )}
        />
      </List.Section>
      <Button mode="contained" onPress={() => onSave()} >
        Save Changes
      </Button>
    </View>

  )
}