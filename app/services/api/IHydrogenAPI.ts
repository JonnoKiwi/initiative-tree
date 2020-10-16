import { ApisauceInstance } from 'apisauce'

/**
 * The options used to configure the API.
 * @cite Originally from Ignite Bowser
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

/**
 * TODO Put this into SagaSauce OR use the generator injection idea in SagaSauce's issues
 */
export interface SagaSauceAPI {
  createData: unknown
  getData: unknown
  updateData: unknown
  deleteData: unknown
}

export interface HydrogenAPI {
  apisauce: ApisauceInstance
  config: ApiConfig
  setup: any
}
