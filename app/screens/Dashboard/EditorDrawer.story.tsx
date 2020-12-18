import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import EditorDrawer from './EditorDrawer'
import UserListItem from "./UserListItem";

declare var module

storiesOf('EditorDrawer', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Visual', () => (
    <Story>
      <UseCase text="All Properties" usage="Edit elements.">
        <EditorDrawer
          name="Dirgy"
          diceRoll="20"
          bonus="2"
          avatar={{ thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg" }}
        />
      </UseCase>
    </Story>
  ))
