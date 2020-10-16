import { resettableReducer } from 'reduxsauce'
import { makeReducers } from '../modules'

const resettable = resettableReducer('RESET')
export default {
  ...makeReducers({ resettable }),
}
