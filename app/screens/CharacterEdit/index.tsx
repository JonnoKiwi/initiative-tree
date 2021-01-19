import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import {Screen, Header } from '../../components'
import {Button, Portal, Snackbar} from 'react-native-paper'
import { CharacterEdit } from '../../components'
import createScreen from '../createScreen'

import { Character } from '../../state/Models'
import styles from './styles'

export default createScreen('CharacterEdit', (props) => {
  // Pull in navigation via hook
  const { params: { character } } = useRoute()
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [message, setMessage] = useState('')
  const showMessage = (message) => {
    setMessage(message)
    setIsMessageVisible(true)
  }

  const updateCharacter = (character: Character) => {
    showMessage(`${character.name} updated`)
    props.updateCharacters(character)
  }

  const deleteCharacter = async (character: Character) => {
    await props.deleteCharacters([character])
    await props.getCharacters()
    goBack()
  }

  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll">
        <Header
          headerText="Character Editor"
          leftIcon="back"
          onLeftPress={goBack}
        />
        <CharacterEdit character={character} onChange={updateCharacter} />
        <Button onPress={() => deleteCharacter(character)} >
          Delete
        </Button>
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
