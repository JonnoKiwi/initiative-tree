import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import UserListItem from './UserListItem'

declare var module

storiesOf('UserListItem', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Visual', () => (
    <Story>
      <UseCase text="All Properties" usage="The primary button.">
        <UserListItem
          name="Dirgy"
          initiative={20}
          avatar={{ thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg" }}
        />
      </UseCase>
    </Story>
  ))
