import camelCase from 'lodash/camelCase'
import reduce from 'lodash/reduce'
/**
 * To Register a SagaSauce powered Redux Module
 * 1. import the module
 * 2. add the imported module to the RegisteredModules array
 */
// -------------------- REGISTER MODULES -------------------------------- //
// 1. Import Modules
import Users from './users'
import Characters from './characters'

// 2. Register Modules
const RegisteredModules = { Users, Characters }
// add imported module HERE ^

// ------------------------------------------------------------- //
// ---------------------- MAGIC -------------------------------- //
export const makeDispatchers = ({ dispatch }) => {
  return reduce(
    RegisteredModules,
    (acc, value) => {
      return {
        ...acc,
        ...value.createDispatchers(dispatch),
      }
    },
    {},
  )
}
export const makeReducers = ({ resettable }) => {
  return reduce(
    RegisteredModules,
    (acc, value, key) => {
      return {
        ...acc,
        [camelCase(key)]: resettable(value.Reducers),
      }
    },
    {},
  )
}
export const makeSagas = (api) =>
  reduce(
    RegisteredModules,
    (acc, value) => {
      return acc.concat(value.createSagas(api))
    },
    [],
  )
