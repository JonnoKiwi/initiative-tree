import React from 'react'
import { Image, Platform, View } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { BulletItem, Text, Header, Screen } from '../../components'
import createScreen from '../createScreen'
import { Button, List } from 'react-native-paper'
import UserListItem from './UserListItem'
import { colors } from '../../theme'
// TODO Support MST (https://mobx-react.js.org/)
import { useSelector } from 'react-redux'
import styles from './styles'
export const logoIgnite = require('./logo-ignite.png')
export const heart = require('./heart.png')

const renderUser = (item, index) => {
  return <UserListItem item={item} key={index} />
}

export default createScreen('Dashboard', () => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const users = useSelector((state) => state.users.data)
  const openDrawer = async () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll" backgroundColor={colors.background}>
        <Header
          headerTx="dashboardScreen.howTo"
          leftIcon="back"
          onLeftPress={goBack}
          style={styles.HEADER}
          titleStyle={styles.HEADER_TITLE}
        />
        <Text style={styles.TITLE} preset="header" tx="dashboardScreen.title" />
        <Text style={styles.TAGLINE} tx="dashboardScreen.tagLine" />
        <BulletItem text="Load up Reactotron!  You can inspect your app, view the events, interact, and so much more!" />
        <BulletItem text="Integrated here, Navigation with State, TypeScript, Storybook, Solidarity, and i18n." />
        <View>
          <Button mode="contained">
            <Text tx="dashboardScreen.reactotron" />
          </Button>
          <Text style={styles.HINT} tx={`dashboardScreen.${Platform.OS}ReactotronHint`} />
        </View>
        <View>
          <Button mode="contained" onPress={openDrawer}>
            <Text tx="dashboardScreen.openDrawer" />
          </Button>
        </View>
        <List.Section>{users.map(renderUser)}</List.Section>
        <Image source={logoIgnite} style={styles.IGNITE} />
      </Screen>
    </View>
  )
})
