import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Text, Header, Screen } from '../../components'
import createScreen from '../createScreen'
import { Dialog, List, Portal, FAB } from 'react-native-paper'
import UserListItem from './UserListItem'
import { useSelector } from 'react-redux'
import styles from './styles'
import { User } from '../../services/api/users'
import CharactersRolls from './CharactersRolls'

const renderUser = (item: User, index, onPress) => {
  return <UserListItem
    id={item.id}
    key={index}
    name={item.name}
    initiative={item.initiative}
    avatar={item.avatar}
    onPress={onPress}
  />
}

const FABStyles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default createScreen('Dashboard', () => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()
  const openCharacter = (item: User) => {
    console.log(item.name)
  }
  const [isDialogVisible, setIsDialogVisible] = React.useState(false)
  const renderUserAdapter = (item, index) => renderUser(item, index, openCharacter)

  const users = useSelector((state) => state.users.data)

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
        <Portal>
          <FAB
            style={FABStyles.fab}
            icon="plus"
            onPress={() => setIsDialogVisible(true)}
          />
        </Portal>
        <List.Section>{users.map(renderUserAdapter)}</List.Section>
        <Portal>
          <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)}>
            <Dialog.Content>
              <CharactersRolls users={users} />
            </Dialog.Content>
          </Dialog>
        </Portal>
      </Screen>
    </View>
  )
})
