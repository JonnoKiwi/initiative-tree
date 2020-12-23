import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import AvatarIcon from './AvatarIcon'

declare var module

storiesOf('AvatarIcon', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('With default avatar', () => (
    <Story>
      <UseCase text="All Properties" usage="The primary button.">
        <AvatarIcon />
      </UseCase>
    </Story>
  ))
  .add('With a defined avatar', () => (
    <Story>
      <UseCase text="All Properties" usage="The primary button.">
        <AvatarIcon avatar={{ thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg" }} />
      </UseCase>
    </Story>
  ))
