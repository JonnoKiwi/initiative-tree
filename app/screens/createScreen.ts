import { connectState } from '@app/state'
export default (name: string, Component: any) => {
  return connectState(Component)
}
