import React from 'react'
import { View, SafeAreaView, Image } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { Header, Screen, Text } from '../../components'
import createScreen from '../createScreen'
import styles from './styles'
const logo = require('./tree.png')

export default createScreen('Welcome', (props) => {
  const navigation = useNavigation()
  const loadCharacters = React.useMemo(
    () => async () => {
      await props.getCharacters({ query: { results: 5 } })
    },
    [],
  )
  const nextScreen = async () => {
    await loadCharacters()
    navigation.navigate('Dashboard')
  }
  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll" >
        <Header
          headerTx="welcomeScreen.poweredBy"
          style={styles.HEADER}
          titleStyle={styles.HEADER_TITLE}
        />
        <Text style={styles.TITLE_WRAPPER}>
          <Text style={styles.TITLE} text="Prepare for combat and roll for initiative!" />
        </Text>
        <Image source={logo} style={styles.TREE} />
        <Text style={styles.CONTENT}>
          In the adventures of Dungeon and Dragons, you can get distracted from the story when combat begins,
          and you have to calculate your players initiative order. With the Initiative Tree, the Dungeon Master
          can organize his players faster and jump straight into the action!
        </Text>
      </Screen>
      <SafeAreaView style={styles.FOOTER}>
        <View style={styles.FOOTER_CONTENT}>
          <Button mode="contained" onPress={nextScreen}>
            <Text tx="welcomeScreen.continue" />
          </Button>
        </View>
      </SafeAreaView>
    </View>
  )
})
