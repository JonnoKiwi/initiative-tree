import React from 'react'
import { View } from 'react-native'
import { Screen, Header } from '../../components'
import styles from './styles'
import CharacterEdit from './CharacterEdit'
import { useRoute } from '@react-navigation/native'
import createScreen from '../createScreen'
import { Character } from '../../state/Models'

export default createScreen('Character', (props) => {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  const { params: { character } } = useRoute()
  const updateCharacter = (character: Character) => {
    // showMessage(`${character.name} updated`)
    props.updateCharacters(character)
  }
  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll">
        <Header headerText="Character Editor" />
        <CharacterEdit character={character} onChange={updateCharacter} />
      </Screen>
    </View>
  )
})
