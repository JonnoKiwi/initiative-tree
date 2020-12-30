import { ApisauceInstance } from 'apisauce'
import { DEFAULT_API_CONFIG } from './api-config'
import * as Types from './api.types'
import { ApiConfig, HydrogenAPI, SagaSauceAPI } from '../IHydrogenAPI'
import R from 'ramda'
import AsyncStorage from '@react-native-async-storage/async-storage'

const sortBy = R.sortBy(R.prop('initiative'))

export const ensureNumber = (value: any): number => {
  if (R.is(String, value)) {
    value = parseInt(value)
  }
  return R.is(Number, value) && !Number.isNaN(value) ? value : 0
}
export const calculateInitiative = (entity: Types.Character): number => {
  return ensureNumber(entity.roll) + ensureNumber(entity.modifiers) + ensureNumber(entity.dexterity)
}

const DEFAULT_DATA: Types.Character[] = [
  {
    id: '11111-111111-11111-11111',
    initiative: 0,
    roll: 0,
    dexterity: 12,
    modifiers: 18,
    name: 'Dirby',
    avatar: {
      thumbnail: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  },
  {
    id: '11111-111111-11111-11112',
    initiative: 0,
    roll: 0,
    dexterity: 6,
    modifiers: 2,
    name: 'Yamanu',
    avatar: {
      thumbnail: 'https://randomuser.me/api/portraits/women/80.jpg'
    }
  }
].map((entity) => ({ ...entity, initiative: calculateInitiative(entity) }))

/**
 * Warning this is not performant. We should use an alternative in-memory database.
 */
class Server {
  storage: Types.Character[]
  storageNamespace: string
  storageKey: string

  constructor() {
    this.storageNamespace = '@initiative-tree'
    this.storageKey = 'characters'
    this.warm()
  }

  getStorageKey (): string {
    return `${this.storageNamespace}:${this.storageKey}`
  }

  async _getItemsFromStorage(): Promise<Types.Character[]> {
    const jsonValue = await AsyncStorage.getItem(this.getStorageKey())
    return jsonValue != null ? JSON.parse(jsonValue) : []
  }

  async getItems () {
    const list = await this._getItemsFromStorage()
    return {
      data: sortBy(list)
    }
  }

  async updateItem(data) {
    // BUSINESS RULES
    // Validation
    data.roll = ensureNumber(data.roll)
    // initiative is calculated on server and the clients cannot set it manually
    data = R.omit(['initiative'], data)

    // DATA UPDATES
    const list = await this._getItemsFromStorage()
    const changedItem = list.find(entity => data.id === entity.id)
    const mergedItem = {
      ...changedItem,
      ...data
    }
    const newList = [
      // Replace existing
      ...list.filter(entity => changedItem.id !== entity.id) || [],
      ...[{
        ...mergedItem,
        initiative: calculateInitiative(mergedItem) // business rule
      }]
    ]
    await AsyncStorage.setItem(this.getStorageKey(), JSON.stringify(newList))
    return {
      data: newList.find(entity => data.id === entity.id)
    }
  }

  async updateItems(data) {
    for (const item of data) {
      await this.updateItem(item)
    }
    const list = await this._getItemsFromStorage()
    return {
      data: sortBy(list)
    }
  }

  async warm() {
    const list = await this._getItemsFromStorage()
    if (!list.length) {
      await AsyncStorage.setItem(this.getStorageKey(), JSON.stringify(DEFAULT_DATA))
    }
  }
}

/**
 * Manages all requests to the API.
 * TODO Generator for APIs. We may need to connect to different APIs
 */
export class ApiFake implements SagaSauceAPI, HydrogenAPI {
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
  setup() {
    this.server = new Server()
  }

  /* ----- Existing SagaSauce API Structure. There is much to improve though so make it your own. Very much a work in-progress ---- */
  getData = async (data) => {
    const items = await this.server.getItems()
    try {
      return { ok: true, kind: 'ok', data: items }
    } catch {
      return { ok: false, kind: 'bad-data' }
    }
  }

  createData = async (data) => {
    throw new Error('Not implemented')
  }

  deleteData = async (data) => {
    throw new Error('Not implemented')
  }

  updateData = async (data) => {
    if (!R.is(Array, data)) {
      data = [data]
    }
    const list = await this.server.updateItems(data)
    return { ok: true, kind: 'ok', data: list }
  }
}
