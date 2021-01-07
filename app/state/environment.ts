import { useReactotron, USE_LIVE_API_FOR_CHARACTERS } from '@env'
import { Api } from '../services/api'

let ReactotronDev
if (useReactotron === 'true') {
  const { Reactotron } = require('../services/reactotron')
  ReactotronDev = Reactotron
}

class EnvironmentValues {
  useReactotron: boolean
  useLiveAPIForCharacters: boolean
  constructor() {
    this.useReactotron = useReactotron === 'true'
    this.useLiveAPIForCharacters = USE_LIVE_API_FOR_CHARACTERS === 'true'
  }
}

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
  values: EnvironmentValues
  constructor() {
    this.values = new EnvironmentValues()
    // create each service
    if (this.values.useReactotron) {
      // dev-only services
      this.reactotron = new ReactotronDev()
    }
    this.api = new Api({ useLiveAPIForCharacters: this.values.useLiveAPIForCharacters })
  }

  async setup() {
    // allow each service to setup
    if (useReactotron) {
      await this.reactotron.setup()
    }
    await this.api.setup()
  }

  /**
   * Reactotron is only available in dev.
   */
  reactotron: typeof ReactotronDev

  /**
   * Our api.
   */
  api: Api
}

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
  const env = new Environment()
  await env.setup()
  return env
}
