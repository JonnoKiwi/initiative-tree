import React, { useState, useCallback, useEffect } from 'react'
import { TextInput, List, Avatar, Text } from 'react-native-paper'
import { View, ViewStyle } from 'react-native'
import { Character } from '../../state/Models'

const avatarStyle: ViewStyle = {
  marginRight: 24,
}

export const Editor = (props) => {
  const character: Character = props.character
  const [value, setLocal] = useState(String(character.roll))
  const [name, setName] = useState(String(character.name))
  const [dexterity, setDexterity] = useState(String(character.dexterity))
  const [modifiers, setModifiers] = useState(String(character.modifiers))
  useEffect(
    () => {
      setLocal(String(character.roll))
    },
    [character.roll],
  )
  const onChange = useCallback((value) => {
    const onlyNumbers = Number(value.replace(/[^\d-]/g, ''))
    setLocal(String(onlyNumbers))
    onRollChange({ newRoll: onlyNumbers, character })
  }, [character.roll])
  return (
    <List.Section>
      <List.Item
        key={character.id}
        title={character.name}
        descriptionNumberOfLines={1}
        left={() => (
          <Avatar.Image source={{ uri: character.avatar.thumbnail }} size={48} style={avatarStyle} />
        )}
        right={() => (
          <TextInput
            clearTextOnFocus
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <List.Item
        key={character.id}
        title={character.dexterity}
        descriptionNumberOfLines={1}
        right={() => (
          <TextInput
            clearTextOnFocus
            keyboardType='numeric'
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <List.Item
        key={character.id}
        title={character.modifiers}
        descriptionNumberOfLines={1}
        left={() => (
          <Avatar.Image source={{ uri: character.avatar.thumbnail }} size={48} style={avatarStyle} />
        )}
        right={() => (
          <TextInput
            clearTextOnFocus
            keyboardType='numeric'
            value={value}
            onChangeText={onChange}
          />
        )}
      />
    </List.Section>
  )
}

export default function EditorList (props) {
  const {
    data,
    onChange,
    onEditCharacter
  } = props
  const list = data || []
  return (
    list.length ? <View>
      { list.map(
        (item) => (
          <Editor
            key={item.id}
            onPress={onEditCharacter}
            onRollChange={onChange}
            character={item}
          />
        )
      )}
    </View>
      : <Text>No Characters</Text>
  )
}
