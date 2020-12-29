import React from 'react'
import { Screen, Header } from '../../components'
import { TextInput } from 'react-native-paper'
// import { useNavigation } from '@react-navigation/native'
import createScreen from '../createScreen'

export default createScreen('Character', (props) => {
// Pull in navigation via hook
// const navigation = useNavigation()
// const { usersList } = props
  return (
    <Screen preset="scroll">
      <Header headerText="character" />
    </Screen>
  )
})
