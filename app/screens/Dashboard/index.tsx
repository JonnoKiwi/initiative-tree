import React from 'react'
import { Screen, Header } from '../../components'
// import { useNavigation } from '@react-navigation/native'
import createScreen from '../createScreen'

export default createScreen('Dashboard', (props) => {
// Pull in navigation via hook
// const navigation = useNavigation()
// const { usersList } = props
  return (
    <Screen preset="scroll">
      <Header headerText="dashboard" />
    </Screen>
  )
})
