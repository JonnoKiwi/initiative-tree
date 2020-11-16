import React from 'react'
import { View, Image, SafeAreaView } from 'react-native'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Header, Screen, Text, Wallpaper } from '../../components'
import createScreen from '../createScreen'
import { color } from '../../theme'
import styles from './styles'
const bowserLogo = require('./bowser.png')

export default createScreen('Welcome', (props) => {
  const navigation = useNavigation()
  const nextScreen = async () => {
    navigation.navigate('dashboard')
  }

  return (
    <View style={styles.FULL}>
      <Wallpaper />
      <Screen style={styles.CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header
          headerTx="welcomeScreen.poweredBy"
          style={styles.HEADER}
          titleStyle={styles.HEADER_TITLE}
        />
        <Text style={styles.TITLE_WRAPPER}>
          <Text style={styles.TITLE} text="Your new app, " />
          <Text style={styles.ALMOST} text="almost" />
          <Text style={styles.TITLE} text="!" />
        </Text>
        <Text style={styles.TITLE} preset="header" tx="welcomeScreen.readyForLaunch" />
        <Image source={bowserLogo} style={styles.BOWSER} />
        <Text style={styles.CONTENT}>
          This probably isn't what your app is going to look like. Unless your designer handed you
          this screen and, in that case, congrats! You're ready to ship.
        </Text>
        <Text style={styles.CONTENT}>
          For everyone else, this is where you'll see a live preview of your fully functioning app
          using Ignite.
        </Text>
      </Screen>
      <SafeAreaView style={styles.FOOTER}>
        <View style={styles.FOOTER_CONTENT}>
          <Button primary full onPress={nextScreen}>
            <Text tx="welcomeScreen.continue" />
          </Button>
        </View>
      </SafeAreaView>
    </View>
  )
})
