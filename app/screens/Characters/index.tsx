import React from 'react'
import { View } from 'react-native'
import { Screen, Header } from '../../components'
import { TextInput } from 'react-native-paper'
import styles from './styles'
// import { useNavigation } from '@react-navigation/native'
import createScreen from '../createScreen'

export default createScreen('Character', (props) => {
// Pull in navigation via hook
// const navigation = useNavigation()
// const { usersList } = props
  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll">
        <Header headerText="Character Editor" />
      </Screen>
    </View>
  )
})
