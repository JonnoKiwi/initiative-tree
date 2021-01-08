import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { Drawer } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import CharactersStateModule from '../state/modules/characters'
import { DashboardScreen, WelcomeScreen } from '../screens'

const { Navigator, Screen } = createDrawerNavigator()
const DrawerContent = (props) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const onRefresh = () => {
    dispatch({ type: CharactersStateModule.Types.GET_DATA })
  }
  const onDeleteAll = () => {
    dispatch({ type: CharactersStateModule.Types.DELETE_DATA })
  }
  return (
    <DrawerContentScrollView {...props}>
      <Drawer.Section>
        <Drawer.Item label='Dashboard' onPress={() => navigation.navigate('Dashboard')}/>
      </Drawer.Section>
      <Drawer.Section title="Settings">
        <Drawer.Item
          icon="delete"
          label="Clear Characters"
          onPress={onDeleteAll}
        />
        <Drawer.Item
          icon="refresh"
          label="Get Characters"
          onPress={onRefresh}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  )
}
const renderDrawerNavigator = () => {
  return (
    <Navigator initialRouteName="Welcome" drawerContent={props => <DrawerContent {...props} />}>
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="Dashboard" component={DashboardScreen} />
    </Navigator>
  )
}

export default renderDrawerNavigator
