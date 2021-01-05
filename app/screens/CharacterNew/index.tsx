import React from 'react'
import createScreen from '../createScreen'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import styles from './styles'
import { Screen, Header } from '../../components'


export default createScreen('CharacterNew', () => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll">
        <Header
          headerText="Character Creator"
          leftIcon="back"
          onLeftPress={goBack}
        />
      </Screen>
    </View>
  )
})
