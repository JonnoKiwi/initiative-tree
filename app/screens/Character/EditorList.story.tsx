import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import EditorList from './'
import { State, Store } from "@sambego/storybook-state"
import { Character } from '../../state/Models'

declare let module
type InitialState = {
  character: Character
}
const initialState: InitialState = {
  character:
    {
      id: '1',
      name: 'Dirgy',
      roll: 18,
      dexterity: 14,
      modifiers: 2,
      initiative: 0,
      avatar: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg" },
    }
}
const store = new Store(initialState)

storiesOf('EditorList', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Main', () => (
    <Story>
      <UseCase text="All Properties" usage="Edit elements.">
        <State store={store}>
          {(state) => (
            <EditorList character={state.character}/>
          )}
        </State>
      </UseCase>
    </Story>
  ))
