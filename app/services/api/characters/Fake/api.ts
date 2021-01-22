import { ApisauceInstance } from 'apisauce'
import { DEFAULT_API_CONFIG } from '../api-config'
import Server from './server'
import { ApiConfig, HydrogenAPI, SagaSauceAPI } from '../../IHydrogenAPI'
import R from 'ramda'

/**
 * Manages all requests to the API.
 * TODO Generator for APIs. We may need to connect to different APIs
 */
export class FakeApi implements SagaSauceAPI, HydrogenAPI {
  server: Server
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  async setup() {
    this.server = new Server()
    await this.server.warm()
  }

  /* ----- Existing SagaSauce API Structure. There is much to improve though so make it your own. Very much a work in-progress ---- */
  getData = async (data) => {
    try {
      const items = await this.server.getItems()
      return { ok: true, kind: 'ok', data: items }
    } catch {
      return { ok: false, kind: 'bad-data' }
    }
  }

  createData = async (data) => {
    try {
      const items = await this.server.createItem(data)
      return { ok: true, kind: 'ok', data: items }
    } catch {
      return { ok: false, kind: 'bad-data' }
    }
  }

  deleteData = async (data) => {
    try {
      const items = await this.server.deleteItems(data)
      return { ok: true, kind: 'ok', data: items }
    } catch {
      return { ok: false, kind: 'bad-data' }
    }
  }

  updateData = async (data) => {
    if (!R.is(Array, data)) {
      data = [data]
    }
    const list = await this.server.updateItems(data)
    return { ok: true, kind: 'ok', data: list }
  }
}
