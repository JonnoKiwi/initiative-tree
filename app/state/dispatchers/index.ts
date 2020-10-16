import { makeDispatchers } from '../modules'

export const mapDispatchToProps = (dispatch) => {
  return {
    ...makeDispatchers({ dispatch }),
  }
}
