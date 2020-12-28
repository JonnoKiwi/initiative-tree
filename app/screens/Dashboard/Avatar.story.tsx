import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import Avatar from './Avatar'

declare var module

storiesOf('Avatar', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('With default avatar', () => (
    <Story>
      <UseCase text="Uses default avatar" usage="The avatar property is not defined.">
        <Avatar />
      </UseCase>
    </Story>
  ))
  .add('With a defined avatar', () => (
    <Story>
      <UseCase text="Uses a defined avatar" usage="A thumbnail object with a string URI is passed to the avatar property.">
        <Avatar avatar={{ thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg" }} />
      </UseCase>
    </Story>
  ))
