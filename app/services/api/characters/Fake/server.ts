import * as Types from '../api.types'
import { DEFAULT_DATA } from './data'
import AsyncStorage from "@react-native-async-storage/async-storage"
import R from 'ramda'
import { Character } from '../api.types'

/** BUSINESS LOGIC */
const sortWith:any = R.sortWith([
  R.descend(R.prop('initiative')),
  R.descend(R.prop('dexterity'))
])

export const ensureNumber = (value: any): number => {
  if (R.is(String, value)) {
    value = parseInt(value)
  }
  return R.is(Number, value) && !Number.isNaN(value) ? value : 0
}

export const calculateInitiative = (entity: Types.Character): number => {
  return ensureNumber(entity.roll) + ensureNumber(entity.modifiers) + ensureNumber(entity.dexterity)
}

export interface ResponseItem {
  data: Character | null
}

export interface ResponseItems {
  data: Character[]
}

/**
 * Warning this is for beta or low-performance needs, otherwise please use an alternative or non-Fake / Live Server.
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

  async _setItemsToStorage(list: Types.Character[]) {
    await AsyncStorage.setItem(this.getStorageKey(), JSON.stringify(list))
  }

  // ------ INTERFACE METHODS ---- //
  async getItems (): Promise<ResponseItems> {
    const list = await this._getItemsFromStorage()
    return {
      data: sortWith(list)
    }
  }

  async createItem(data): Promise<ResponseItems> {
    // BUSINESS RULES
    // Validation
    const item: Types.Character = {
      id: String(Math.random() * 10 * 1000000000000000),
      name: data.name,
      dexterity: data.dexterity,
      modifiers: data.modifiers,
      avatar: data.avatar,
      roll: 0,
      initiative: 0
    }
    item.initiative = calculateInitiative(item)
    const list = await this._getItemsFromStorage()
    list.push(item)
    await this._setItemsToStorage(list)
    return {
      data: list
    }
  }

  async updateItem(data): Promise<ResponseItem> {
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
    await this._setItemsToStorage(newList)
    return {
      data: newList.find(entity => data.id === entity.id)
    }
  }

  async updateItems(data): Promise<ResponseItems> {
    for (const item of data) {
      await this.updateItem(item)
    }
    const list = await this._getItemsFromStorage()
    return {
      data: sortWith(list)
    }
  }

  async deleteItems(data): Promise<ResponseItems> {
    let list = []
    if (data && data.length) {
      const storedList = await this._getItemsFromStorage()
      const ids = data.reduce((acc, value) => value.id, [])
      list = storedList.filter(entity => {
        return !R.contains(entity.id, ids)
      }) || []
    }
    await this._setItemsToStorage(list)
    let newList = await this._getItemsFromStorage()
    return {
      data: sortWith(newList)
    }
  }

  async warm() {
    const list = await this._getItemsFromStorage()
    if (!list.length) {
      await this._setItemsToStorage(DEFAULT_DATA.map((entity) => ({ ...entity, initiative: calculateInitiative(entity) })))
    }
  }
}

export default Server
