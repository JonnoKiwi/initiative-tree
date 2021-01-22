import i18n from 'i18n-js'

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: string, options?: any) {
  return key ? i18n.t(key, options) : null
}
