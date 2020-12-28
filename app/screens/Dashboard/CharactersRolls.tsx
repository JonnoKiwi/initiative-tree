import React, { useState, useCallback, useEffect } from 'react'
import { TextInput, List, Avatar, Text } from 'react-native-paper'
import { ViewStyle } from 'react-native'
import { Character } from '../../state/Models'

const avatarStyle: ViewStyle = {
  marginRight: 24,
}

export const CharacterRoll = (props) => {
  const onRollChange = props.onRollChange
  const character: Character = props.character
  const [value, setLocal] = useState(String(character.roll))
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
    <List.Item
      key={character.id}
      title={character.initiative}
      description={`${character.name}`}
      descriptionNumberOfLines={1}
      onPress={() => props.onPress(character)}
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
  )
}

export default function CharactersRolls (props) {
  const {
    data,
    onChange,
    onEditCharacter
  } = props
  const list = data || []
  return (
    list.length ? <List.Section>
      { list.map(
        (item) => (
          <CharacterRoll
            key={item.id}
            onPress={onEditCharacter}
            onRollChange={onChange}
            character={item}
          />
        )
      )}
    </List.Section>
      : <Text>No Characters</Text>
  )
}
