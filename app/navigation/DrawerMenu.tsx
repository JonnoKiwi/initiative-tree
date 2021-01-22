import * as React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Drawer, Switch, Text, TouchableRipple } from 'react-native-paper'
import { View, ViewStyle } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import PreferencesStateModule from '../state/modules/preferences'
import CharactersStateModule from '../state/modules/characters'

type Props = {
  progress: any
  state: any
  navigation: any
  descriptors: any
}

/**
 * TODO Drawer Switch Theme - Fix styling and move to another component
 */
const switchStyle:ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  paddingVertical: 12,
  paddingHorizontal: 16,
}

export default function DrawerMenu (props: Props) {
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
          <View style={switchStyle}>
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
