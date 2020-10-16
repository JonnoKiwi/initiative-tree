import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types: StartupTypes, Creators } = createActions({
  startup: null,
})

export const Types = StartupTypes
export default Creators
