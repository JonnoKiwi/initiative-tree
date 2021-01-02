import * as React from 'react'
import { View, ViewStyle, TextInput, Switch } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { StoryScreen, Story, UseCase } from '../../../storybook/views'
import Container from './'

declare let module

const ITEMS:ViewStyle[] = [
  { minWidth: 50, minHeight: 50, backgroundColor: 'powderblue' },
  { minWidth: 50, minHeight: 50, backgroundColor: 'skyblue' },
  { minWidth: 100, minHeight: 100, backgroundColor: 'steelblue' }
]
const makeItems = (styleExtends: ViewStyle = {}) => {
  return ITEMS.map((styles, index) =>
    (<View key={index} style={{
      ...styles,
      ...styleExtends
    }} />)
  )
}

storiesOf('Container', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Defaults', () => (
    <Story>
      <Container>
        {makeItems()}
      </Container>
    </Story>
  ))
  .add('Row', () => (
    <Story>
      <UseCase text="Row" usage="">
        <Container>
          {makeItems()}
        </Container>
      </UseCase>
      <UseCase text="Row Reverse" usage="add property reverse">
        <Container reverse>
          {makeItems()}
        </Container>
      </UseCase>
    </Story>
  ))
  .add('Column', () => (
    <Story>
      <UseCase text="Column" usage="add property column">
        <Container column>
          {makeItems()}
        </Container>
      </UseCase>
      <UseCase text="Column Reverse" usage="add property column, reverse">
        <Container column reverse>
          {makeItems()}
        </Container>
      </UseCase>
    </Story>
  ))
  .add('Spacing', () => (
    <Story>
      <UseCase text="Row Space Between" usage="add property space='between'">
        <Container space='between'>
          {makeItems()}
        </Container>
      </UseCase>
      <UseCase text="Row Space Around" usage="add property space='around'">
        <Container space='around'>
          {makeItems()}
        </Container>
      </UseCase>
      <UseCase text="Row Space Evenly" usage="add property space='evenly'">
        <Container space='evenly'>
          {makeItems()}
        </Container>
      </UseCase>
      <UseCase text="Column Space Between" usage="add property column,space='between'." height={350}>
        <Container column space='between'>
          {makeItems()}
        </Container>
      </UseCase>
      <UseCase text="Column Space Around" usage="add property column,space='around'" height={350}>
        <Container column space='around'>
          {makeItems()}
        </Container>
      </UseCase>
      <UseCase text="Column Space Evenly" usage="add property column,space='evenly'" height={350}>
        <Container column space='evenly'>
          {makeItems()}
        </Container>
      </UseCase>
    </Story>
  ))
  .add('Stretch Items', () => (
    <Story>
      <UseCase text="Stretch Items Column" usage="add property stretch-items" height={350}>
        <Container stretch-items column>
          {makeItems()}
        </Container>
      </UseCase>
      <UseCase text="Stretch Items Rows" usage="add property stretch-items. flex=1 is automatically placed for stretch-items">
        <Container stretch-items>
          {makeItems()}
        </Container>
      </UseCase>
    </Story>
  ))
  .add('Form', () => (
    <Story>
      <UseCase text="Form Items" usage="add property preset='form'" height={350}>
        <Container preset='form' style={{ justifyContent: 'flex-start' }}>
          <TextInput placeholder='Name' />
          <Switch />
        </Container>
      </UseCase>
    </Story>
  ))
