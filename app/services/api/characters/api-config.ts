import { ApiConfig } from '../IHydrogenAPI'

// Use this import if you want to use "env.js" file
// const { API_URL } = require("@env")
// Or just specify it directly like this:
const API_URL = 'https://randomuser.me/api'

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL || 'https://randomuser.me/api',
  timeout: 10000,
}
