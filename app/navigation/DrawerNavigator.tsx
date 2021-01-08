import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { Drawer, Switch, Text, TouchableRipple } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import CharactersStateModule from '../state/modules/characters'
import PreferencesStateModule from '../state/modules/preferences'
import { DashboardScreen, WelcomeScreen } from '../screens'
import { Container } from '../components'

const { Navigator, Screen } = createDrawerNavigator()

type Props = {
  progress: any
  state: any
  navigation: any
  descriptors: any
}

const DrawerContent = (props: Props) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const useDarkTheme = useSelector(state => state.preferences.data.useDarkTheme)

  const onRefresh = () => {
    dispatch({ type: CharactersStateModule.Types.GET_DATA })
  }
  const onDeleteAll = () => {
    dispatch({ type: CharactersStateModule.Types.DELETE_DATA })
  }
  const toggle = () => {
    dispatch({ type: PreferencesStateModule.Types.TOGGLE_THEME })
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
        <TouchableRipple onPress={toggle}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}>
            <View pointerEvents="none">
              <Switch value={useDarkTheme} />
            </View>
            <Text>Dark Theme</Text>
          </View>
        </TouchableRipple>
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
