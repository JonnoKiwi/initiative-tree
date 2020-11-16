import React from 'react'
import { observer } from 'mobx-react-lite'
import { ViewStyle } from 'react-native'
import { Screen, Text } from '../../components'
// import { useNavigation } from '@react-navigation/native'
// import { useStores } from '../../models'
import { color } from '../../theme'
import createScreen from '../createScreen'

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export default createScreen('InitiativeScreen', () => {
// Pull in navigation via hook
// const navigation = useNavigation()
// Pull in one of our MST stores
// const { someStore, anotherStore } = useStores()
// OR
// const rootStore = useStores()

  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="The Initiative Screen" />
    </Screen>
  )
})
