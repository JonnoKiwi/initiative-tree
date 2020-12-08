import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DashboardScreen, WelcomeScreen } from '../screens'

const Drawer = createDrawerNavigator()

const renderDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Welcome">
      <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  )
}

export default renderDrawerNavigator
