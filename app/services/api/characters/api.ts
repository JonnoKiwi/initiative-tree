import { ApisauceInstance, create, ApiResponse } from 'apisauce'
import { getGeneralApiProblem } from '../api-problem'
import { DEFAULT_API_CONFIG } from './api-config'
import * as Types from './api.types'
import { ApiConfig, HydrogenAPI, SagaSauceAPI } from '../IHydrogenAPI'

const DATA_KEY = 'results'

/**
 * @param value
 */
export const _mutateEntity = (value): Types.Character => {
  return {
    roll: 0,
    user: null,
    name: value.name.first,
    initiative: value.initiative || 0,
    avatar: value.picture,
    id: value.id.value
  }
}

/**
 * Manages all requests to the API.
 * TODO Generator for APIs. We may need to connect to different APIs
 */
export class Api implements SagaSauceAPI, HydrogenAPI {
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
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
      },
    })
  }

  /* ----- Existing SagaSauce API Structure. There is much to improve though so make it your own. Very much a work in-progress ---- */
  getData = async (data) => {
    const response: ApiResponse<any> = await this.apisauce.get(`/`, data && { ...data.query })

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawList = response.data[DATA_KEY]
      const result: Types.Character[] = rawList.map(_mutateEntity)
      return { ok: true, kind: 'ok', data: { data: result } }
    } catch {
      return { ok: false, kind: 'bad-data' }
    }
  }

  createData = async (data) => {
    return await this.apisauce.post(`/`, data)
  }

  updateData = async (data) => {
    return await this.apisauce.patch(`/`, data)
  }

  deleteData = async (data) => {
    return await this.apisauce.delete(`/${data.id}`, data)
  }
}
