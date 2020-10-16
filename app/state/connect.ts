import { connect } from 'react-redux'
import { mapDispatchToProps } from './dispatchers'

/**
 * While the primary reason is to make Hydrogen easier to maintain,
 *  there is an added benefit of centralizing State Machine connection.
 */
export default (Component, options = {}) => {
  return connect(options.mapStateToProps, mapDispatchToProps)(Component)
}
