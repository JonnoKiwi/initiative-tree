import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { View } from 'react-native'
import { Screen, CharacterEdit } from '../../components'
import { Portal, Snackbar } from 'react-native-paper'
import createScreen from '../createScreen'

import { Character } from '../../state/Models'
import styles from './styles'

export default createScreen('CharacterEdit', (props) => {
  // Pull in navigation via hook
  const { params: { character } } = useRoute()

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

  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll">
        <CharacterEdit character={character} onChange={updateCharacter} />
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
