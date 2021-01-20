import * as React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Appbar, useTheme } from 'react-native-paper'

export type Props = {
  navigation: any
  scene: any
  hideGoBack?: boolean | undefined
  noAppTitle?: boolean | undefined
}
/**
 * TODO: Move to components thereby replacing the existing and adding Stories. The directory should be Header (not header)
 * @param props
 * @constructor
 */
export default function Header (props: Props) {
  const { scene, hideGoBack = false } = props
  const navigation = useNavigation()
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }
  const theme = useTheme()
  const title = props.noAppTitle ? scene.descriptor.options.title : 'Initiative Tree'
  const subtitle = props.noAppTitle ? '' : scene.descriptor.options.title
  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.background }}>
      {
        !hideGoBack && navigation.canGoBack()
          ? (<Appbar.BackAction onPress={() => navigation.goBack()} />)
          : null
      }
      <Appbar.Content title={title} subtitle={subtitle} />
      <Appbar.Action
        icon="menu"
        onPress={openDrawer}
      />
    </Appbar.Header>
  )
}
