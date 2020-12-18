import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import CharactersRolls, { CharacterRoll } from './CharactersRolls'
import { Text, View } from 'react-native'
import { State, Store } from "@sambego/storybook-state"

declare var module
const store = new Store({
  roll: '',
  users: [
    {
      name: "Dirgy",
      roll: "18",
      avatar: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg" }
    },
    {
      name: "Intel",
      roll: "15",
      avatar: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg" }
    }
  ]
})

storiesOf('CharacterRoll', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Main', () => (
    <Story>
      <UseCase text="All Properties" usage="Edit elements.">
        <State store={store}>
          {(state) => (
            <View>
              <CharacterRoll
                name="Dirgy"
                roll={state.roll}
                onRollChange={(roll) => store.set({roll})}
                avatar={{ thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg" }}
              />
            </View>
          )}
        </State>
      </UseCase>
    </Story>
  ))

storiesOf('CharactersRolls', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Main', () => (
    <Story>
      <UseCase text="All Properties" usage="Edit elements.">
        <State store={store}>
          {(state) => (
            <View>
              <CharactersRolls
                users={state.users}
              />
              <Text>
                Roll {state.roll}
              </Text>
            </View>
          )}
        </State>
      </UseCase>
    </Story>
  ))
