import React from 'react'
import { Image, Platform, View } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { BulletItem, Text, Header, Screen, Wallpaper } from '../../components'
import createScreen from '../createScreen'
import { Button, List, ListItem, Text as TextNB, Thumbnail, Right, Left, Body } from 'native-base'
import { color } from '../../theme'
// TODO Support MST (https://mobx-react.js.org/)
import { useSelector } from 'react-redux'
import styles from './styles'
export const logoIgnite = require('./logo-ignite.png')
export const heart = require('./heart.png')

const renderUser = (item, index) => {
  // TODO Use Text from NativeBase once the theme is completely working out of the box
  const TextAlternating = index % 2 ? Text : TextNB
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: item.picture.thumbnail }} />
      </Left>
      <Body>
        <TextAlternating>
          {item.name.first} {item.name.last}
        </TextAlternating>
        <TextAlternating note numberOfLines={1}>
          {item.gender}
        </TextAlternating>
      </Body>
      <Right>
        <Button transparent>
          <TextAlternating>View</TextAlternating>
        </Button>
      </Right>
    </ListItem>
  )
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
      <Wallpaper />
      <Screen style={styles.CONTAINER} preset="scroll" backgroundColor={color.transparent}>
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
          <Button primary full>
            <Text tx="dashboardScreen.reactotron" />
          </Button>
          <Text style={styles.HINT} tx={`dashboardScreen.${Platform.OS}ReactotronHint`} />
        </View>
        <View>
          <Button full onPress={openDrawer}>
            <Text tx="dashboardScreen.openDrawer" />
          </Button>
        </View>
        <List>{users.map(renderUser)}</List>
        <Image source={logoIgnite} style={styles.IGNITE} />
      </Screen>
    </View>
  )
})
