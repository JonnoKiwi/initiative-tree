import { ApisauceInstance } from 'apisauce'
import { DEFAULT_API_CONFIG } from './api-config'
import * as Types from './api.types'
import { ApiConfig, HydrogenAPI, SagaSauceAPI } from '../IHydrogenAPI'
import { User } from '../../../state/Models'
import R from 'ramda'

const sortByName = R.sortBy(R.prop('name'))

export const ensureNumber = (value: any): number => {
  if (R.is(String, value)) {
    value = parseInt(value)
  }
  return R.is(Number, value) && !Number.isNaN(value) ? value : 0
}
export const calculateInitiative = (entity: Types.Character): number => {
  return ensureNumber(entity.roll) + ensureNumber(entity.modifiers) + ensureNumber(entity.dexterity)
}

const USERS: User[] = [
  {
    id: '435-dfgs-323425',
    name: 'Jonno Arcus',
    avatar: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
    }
  },
  {
    id: '435-35643-323425',
    name: 'John Bailey',
    avatar: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/7.jpg'
    }
  }
]

const DEFAULT_DATA: Types.Character[] = [
  {
    id: '11111-111111-11111-11111',
    initiative: 0,
    roll: 0,
    dexterity: 12,
    modifiers: 18,
    name: 'Dirby',
    user: USERS[0],
    avatar: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    }
  },
  {
    id: '11111-111111-11111-11112',
    initiative: 0,
    roll: 0,
    dexterity: 6,
    modifiers: 2,
    name: 'Yamanu',
    user: USERS[1],
    avatar: {
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/80.jpg'
    }
  }
].map((entity) => ({ ...entity, initiative: calculateInitiative(entity) }))

/**
 * Manages all requests to the API.
 * TODO Generator for APIs. We may need to connect to different APIs
 */
export class ApiFake implements SagaSauceAPI, HydrogenAPI {
  storage: Types.Character[]
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
    this.storage = DEFAULT_DATA
  }

  /* ----- Existing SagaSauce API Structure. There is much to improve though so make it your own. Very much a work in-progress ---- */
  getData = async (data) => {
    try {
      return { ok: true, kind: 'ok', data: { data: sortByName(this.storage) } }
    } catch {
      return { ok: false, kind: 'bad-data' }
    }
  }

  createData = async (data) => {
    throw new Error('Not implemented')
  }

  updateData = async (data) => {
    data.roll = R.is(String, data.roll) ? parseInt(data.roll) : (R.is(Number, data.roll) ? data.roll : 0)
    const changedItem = this.storage.find(entity => data.id === entity.id)
    const mergedItem = {
      ...changedItem,
      ...data
    }
    this.storage = sortByName([
      ...this.storage.filter(entity => changedItem.id !== entity.id) || [],
      ...[{
        ...mergedItem,
        initiative: calculateInitiative(mergedItem)
      }]
    ])
    return { ok: true, kind: 'ok', data: { data: this.storage } }
  }

  deleteData = async (data) => {
    throw new Error('Not implemented')
  }
}
