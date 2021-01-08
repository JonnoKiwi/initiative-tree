import * as React from 'react'
import { View, Alert } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import { Header } from './header'
import StorybookTheme from '../../theme/storybook'

declare let module

const VIEW_STYLE = {
  flex: 1,
  backgroundColor: StorybookTheme.background,
}

storiesOf('Header', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Behavior', () => (
    <Story>
      <UseCase noPad text="default" usage="The default usage">
        <View style={VIEW_STYLE}>
          <Header headerTx="dashboardScreen.howTo" />
        </View>
      </UseCase>
      <UseCase noPad text="leftIcon" usage="A left nav icon">
        <View style={VIEW_STYLE}>
          <Header
            headerTx="dashboardScreen.howTo"
            leftIcon="back"
            onLeftPress={() => Alert.alert('left nav')}
          />
        </View>
      </UseCase>
      <UseCase noPad text="rightIcon" usage="A right nav icon">
        <View style={VIEW_STYLE}>
          <Header
            headerTx="dashboardScreen.howTo"
            rightIcon="bullet"
            onRightPress={() => Alert.alert('right nav')}
          />
        </View>
      </UseCase>
    </Story>
  ))
