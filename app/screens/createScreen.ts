import { connectState } from '@app/state'
import { connectStyle } from 'native-base'
export default (name: string, Component: any) => {
  return connectStyle(name + 'Screen', {})(connectState(Component))
}
