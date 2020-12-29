import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DashboardScreen, WelcomeScreen } from '../screens'

const DrawerNavigator = createDrawerNavigator()

const renderDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator initialRouteName="Welcome">
      <DrawerNavigator.Screen name="Welcome" component={WelcomeScreen} />
      <DrawerNavigator.Screen name="Dashboard" component={DashboardScreen} />
    </DrawerNavigator.Navigator>
  )
}

export default renderDrawerNavigator
