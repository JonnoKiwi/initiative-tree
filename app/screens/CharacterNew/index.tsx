import React, { useState } from 'react'
import createScreen from '../createScreen'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Portal, Snackbar } from 'react-native-paper'
import styles from './styles'
import { Screen, CharacterEdit } from '../../components'
import { Character, createCharacter as characterFactory } from '../../state/Models'

export default createScreen('CharacterNew', (props) => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [message, setMessage] = useState('')
  const showMessage = (message) => {
    setMessage(message)
    setIsMessageVisible(true)
  }

  const createCharacter = async (character: Character) => {
    showMessage(`${character.name} created`)
    await props.createCharacters(character)
    goBack()
  }

  const character: Character = characterFactory()
  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll">
        <CharacterEdit character={character} onChange={createCharacter}/>
      </Screen>
      <Portal>
        <Snackbar
          visible={isMessageVisible}
          onDismiss={() => setIsMessageVisible(false)}
          action={{
            label: 'OK',
            onPress: () => setIsMessageVisible(false)
          }}
        >
          {message}
        </Snackbar>
      </Portal>
    </View>
  )
})
