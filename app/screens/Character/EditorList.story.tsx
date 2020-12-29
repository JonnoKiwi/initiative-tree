import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import EditorList , { Editor } from './EditorList'
import { View } from 'react-native'
import { State, Store } from "@sambego/storybook-state"
import { action } from '@storybook/addon-actions'
import { Character } from '../../state/Models'

declare let module
type InitialState = {
  roll: string
  characters: Character[]
}
const initialState: InitialState = {
  roll: '',
  characters: [
    {
      id: '1',
      name: 'Dirgy',
      roll: 18,
      dexterity: 14,
      modifiers: 2,
      initiative: 0,
      avatar: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg" },
      user: null
    },
    {
      id: '2',
      name: 'Intel',
      roll: 18,
      dexterity: 14,
      modifiers: 2,
      initiative: 0,
      avatar: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/8.jpg" },
      user: null
    }
  ]
}
const store = new Store(initialState)

storiesOf('CharacterRoll', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Main', () => (
    <Story>
      <UseCase text="All Properties" usage="Edit elements.">
        <State store={store}>
          {(state) => (
            <View>
              <Editor
                character={state.characters[0]}
                roll={state.roll}
                onRollChange={(roll) => store.set({ roll })}
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
              <EditorList
                data={state.characters}
                onChange={action('Roll Changed')}
                onEditCharacter={action('Character Edit click')}
              />
            </View>
          )}
        </State>
      </UseCase>
    </Story>
  ))
