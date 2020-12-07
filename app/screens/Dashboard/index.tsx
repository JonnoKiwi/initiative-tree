import React from 'react'
import { View } from "react-native"
import { Screen, Header, Wallpaper } from '../../components'
// import { useNavigation } from '@react-navigation/native'
import createScreen from '../createScreen'
import styles from './styles'

export default createScreen('Dashboard', (props) => {
// Pull in navigation via hook
// const navigation = useNavigation()
// const { usersList } = props
  return (
    <View style={styles.FULL}>
      <Wallpaper />
      <Screen preset="scroll">
        <Header headerText="dashboard" />
      </Screen>
    </View>
  )
})
