import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, Header, Screen, Container } from '../../components'
import createScreen from '../createScreen'
import { Portal, FAB, Snackbar } from 'react-native-paper'
import { useSelector } from 'react-redux'
import styles from './styles'
import CharactersRolls from './CharactersRolls'
import { Character } from '../../state/Models'

export default createScreen('Dashboard', (props) => {
  const navigation = useNavigation()
  const [isMessageVisible, setIsMessageVisible] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [isFABOpen, setIsFABOpen] = React.useState(false)
  const showMessage = (message) => {
    setMessage(message)
    setIsMessageVisible(true)
  }
  const goBack = () => navigation.goBack()
  const createCharacter = () => {
    navigation.navigate('PrimaryStack', { screen: 'CharacterNew' })
  }
  const openCharacter = (character: Character) => {
    navigation.navigate('PrimaryStack', { screen: 'CharacterEdit', params: { character } })
  }
  const onRollChange = ({ newRoll, character }) => {
    showMessage(`${character.name} roll changed to ${newRoll}`)
    props.updateCharacters({
      ...character,
      roll: newRoll
    })
  }

  const characters = useSelector((state) => state.characters.data)
  const createCombat = async () => {
    await props.resetRolls()
    showMessage(`New Combat started. Rolls and initiative reset.`)
  }

  return (
    <Container>
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
      <FAB.Group
        open={isFABOpen}
        icon={isFABOpen ? 'minus' : 'plus'}
        onStateChange={({ open }) => setIsFABOpen(open)}
        actions={[
          {
            icon: 'fencing',
            label: 'Combat',
            onPress: createCombat
          },
          {
            icon: 'account-plus',
            label: 'Character',
            onPress: createCharacter
          }
        ]}
      />
      <Portal>
        <Snackbar
          visible={isMessageVisible}
          onDismiss={() => setIsMessageVisible(false)}
          action={{
            label: 'OK',
            onPress: () => setIsMessageVisible(false)
          }}
        >
          {message}
        </Snackbar>
      </Portal>
    </Container>
  )
})
