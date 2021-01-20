import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CharacterEdit, CharacterNew, DashboardScreen } from '../screens'
import DrawerMenu from './DrawerMenu'
import Header from './Header'
import { useNavigation } from '@react-navigation/native'
import { DrawerHeaderProps } from '@react-navigation/drawer/lib/typescript/src/types'

const { Navigator, Screen } = createDrawerNavigator()

type HeaderPropsOverrides = {
  navigation: any
  hideGoBack?: boolean
  noAppTitle?: boolean
}
const createHeaderFactory = (overrides: HeaderPropsOverrides) => {
  return (props: DrawerHeaderProps) => {
    const combinedProps = { ...props, ...overrides }
    return <Header {...combinedProps} />
  }
}

const renderDrawerNavigator = () => {
  const navigation = useNavigation()
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: true,
        header: createHeaderFactory({ navigation, hideGoBack: true })
      }}
      drawerContent={props => <DrawerMenu {...props} />}
    >
      <Screen name="Dashboard" component={DashboardScreen} options={{
        title: 'Dashboard'
      }} />
      <Screen name="CharacterEdit" component={CharacterEdit} options={{
        header: createHeaderFactory({ navigation, hideGoBack: false, noAppTitle: true }),
        title: 'Character Edit'
      }}/>
      <Screen name="CharacterNew" component={CharacterNew} options={{
        header: createHeaderFactory({ navigation, hideGoBack: false, noAppTitle: true }),
        title: 'Create Character'
      }}/>
    </Navigator>
  )
}

export default renderDrawerNavigator
