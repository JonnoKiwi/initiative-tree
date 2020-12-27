import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, Header, Screen } from '../../components'
import createScreen from '../createScreen'
import { Portal, FAB, Snackbar } from 'react-native-paper'
import { useSelector } from 'react-redux'
import styles from './styles'
import CharactersRolls from './CharactersRolls'
import { Character } from '../../state/Models'

const FABStyles = StyleSheet.create({
  fab: {
    bottom: 0,
    margin: 16,
    position: 'absolute',
    right: 0,
  },
})

export default createScreen('Dashboard', (props) => {
  const navigation = useNavigation()
  const [isMessageVisible, setIsMessageVisible] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const goBack = () => navigation.goBack()
  const openCharacter = (item: Character) => {
    setMessage(`${item.name} will soon have a separate screen`)
    setIsMessageVisible(true)
  }
  const onRollChange = ({ newRoll, character }) => {
    setMessage(`${character.name} roll changed to ${newRoll}`)
    setIsMessageVisible(true)
    props.updateCharacters({
      ...character,
      roll: newRoll
    })
  }

  const characters = useSelector((state) => state.characters.data)
  const createCombat = () => {
    setMessage(`coming soon and will reset the rolls and initiatives`)
    setIsMessageVisible(true)
  }

  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER} preset="scroll" >
        <Header
          headerTx="dashboardScreen.header"
          leftIcon="back"
          onLeftPress={goBack}
          style={styles.HEADER}
          titleStyle={styles.HEADER_TITLE}
        />
        <Text style={styles.TITLE} preset="header" tx="dashboardScreen.title" />
        <Text style={styles.TAGLINE} tx="dashboardScreen.tagLine" />
        <CharactersRolls onEditCharacter={openCharacter} data={characters} onChange={onRollChange} />
      </Screen>
      <FAB
        style={FABStyles.fab}
        icon="plus"
        onPress={createCombat}
      />
      <Portal>
        <Snackbar
          visible={isMessageVisible}
          onDismiss={() => setIsMessageVisible(false)}
        >
          {message}
        </Snackbar>
      </Portal>
    </View>
  )
})
