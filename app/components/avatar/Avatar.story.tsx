import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import Avatar from './Avatar'

declare var module

storiesOf('Avatar', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('With default avatar', () => (
    <Story>
      <UseCase text="Uses no thumbnail" usage="While not defining thumbnail, default avatar should display.">
        <Avatar />
      </UseCase>
      <UseCase text="Uses null for thumbnail" usage="Thumbnail defined as null should return default avatar">
        <Avatar thumbnail={ null } />
      </UseCase>
      <UseCase text="Uses undefined for thumbnail" usage="Thumbnail defined as undefined should return default avatar">
        <Avatar thumbnail={ undefined } />
      </UseCase>
      <UseCase text="Uses empty string for thumbnail" usage="Thumbnail defined as undefined should return default avatar">
        <Avatar thumbnail='' />
      </UseCase>
    </Story>
  ))
  .add('Uses a defined thumbnail', () => (
    <Story>
      <UseCase text="Uses a defined thumbnail" usage="URI string is passed to thumbnail">
        <Avatar thumbnail="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
      </UseCase>
    </Story>
  ))

