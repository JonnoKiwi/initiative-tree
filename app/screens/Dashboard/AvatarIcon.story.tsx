import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import AvatarIcon from './AvatarIcon'

declare var module

storiesOf('AvatarIcon', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('With default avatar', () => (
    <Story>
      <UseCase text="Uses default avatar" usage="The avatar property is not defined.">
        <AvatarIcon />
      </UseCase>
    </Story>
  ))
  .add('With a defined avatar', () => (
    <Story>
      <UseCase text="Uses a defined avatar" usage="A thumbnail object with a string URI is passed to the avatar property.">
        <AvatarIcon avatar={{ thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg" }} />
      </UseCase>
    </Story>
  ))
