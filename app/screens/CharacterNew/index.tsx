import React, { useState } from 'react'
import createScreen from '../createScreen'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Portal, Snackbar } from 'react-native-paper'
import styles from './styles'
import { Screen, Header, CharacterEdit } from '../../components'
import { Character } from '../../state/Models'

export default createScreen('CharacterNew', (props) => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const [isMessageVisible, setIsMessageVisible] = useState(false)
  const [message, setMessage] = useState('')
  const showMessage = (message) => {
    setMessage(message)
    setIsMessageVisible(true)
  }

  const createCharacter = (character: Character) => {
    showMessage(`${character.name} created`)
    props.createCharacters(character)
  }

  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll">
        <Header
          headerText="Character Creator"
          leftIcon="back"
          onLeftPress={goBack}
        />
        <CharacterEdit onSave={createCharacter}/>
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
