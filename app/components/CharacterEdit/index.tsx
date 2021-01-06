import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { Character } from '../../state/Models'
import { Avatar, Container } from '../../components'
import { Props } from './props'

export default function CharacterEdit (props: Props) {
  const character: Character = props.character
  const [name, setName] = useState(String(character.name))
  const [dexterity, setDexterity] = useState(String(character.dexterity))
  const [modifiers, setModifiers] = useState(String(character.modifiers))
  const onSave = () => {
    props.onChange({
      ...character,
      name,
      dexterity: parseInt(dexterity),
      modifiers: parseInt(modifiers)
    })
  }

  return (
    <Container preset='form'>
      <Container>
        <Avatar thumbnail={character.avatar.thumbnail} size={124} />
      </Container>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        label="Dexterity"
        keyboardType='numeric'
        value={dexterity}
        onChangeText={setDexterity}
      />
      <TextInput
        label="Modifiers"
        keyboardType='numeric'
        value={modifiers}
        onChangeText={setModifiers}
      />
      <Button mode="contained" onPress={onSave} >
        Save Changes
      </Button>
    </Container>

  )
}
