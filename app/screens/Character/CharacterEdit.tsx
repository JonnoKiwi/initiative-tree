import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import {View, ViewStyle} from 'react-native'
import { Character } from '../../state/Models'
import { Avatar } from '../../components'
import { spacing } from '../../theme'

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
  const BUTTON_STYLE: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4]
  }
  const AVATAR_STYLE: ViewStyle = {
    alignSelf: 'center'
  }

  return (
    <View>
      <View>
        <Avatar style={AVATAR_STYLE} thumbnail={character.avatar.thumbnail} size={124} />
      </View>
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
      <View style={BUTTON_STYLE} >
        <Button mode="contained" onPress={onSave} >
          Save Changes
        </Button>
      </View>
    </View>

  )
}
