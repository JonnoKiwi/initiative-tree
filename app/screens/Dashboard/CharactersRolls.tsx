import React from 'react'
import { TextInput, List, Avatar } from 'react-native-paper'
import { ViewStyle } from 'react-native'
import { Character } from '../../state/Models'

const avatarStyle: ViewStyle = {
  marginRight: 24,
}

export const CharacterRoll = (props) => {
  const onRollChange = props.onRollChange
  const character: Character = props.character
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
          onChangeText={(value) => {
            value = value.replace(/[^\d-]/g, '')
            onRollChange({ newRoll: value, character })
          }}
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
  return (
    <List.Section>
      { data.map(
        (item, index) => (
          <CharacterRoll
            key={item.id}
            onPress={onEditCharacter}
            onRollChange={onChange}
            character={item}
          />
        )
      )}
    </List.Section>
  )
}
