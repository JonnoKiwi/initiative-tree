import React, { useState } from 'react'
import { TextInput, List, Button } from 'react-native-paper'
import { View } from 'react-native'
import { Character } from '../../state/Models'
import { Avatar } from '../../components'

export default function CharacterEdit (props) {
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
      <Avatar thumbnail={character.avatar.thumbnail} size={124} />
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
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
        title='Modifiers'
        right={() => (
          <TextInput
            keyboardType='numeric'
            value={modifiers}
            onChangeText={setModifiers}
          />
        )}
      />
      <Button mode="contained" onPress={onSave} >
        Save Changes
      </Button>
    </View>

  )
}
