// plugins/index.js
import * as helpers from './helpers/index.js'
// get the options out using lodash templates
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// extract the namespace from the options
const { namespace } = options
// create the plugin
export default ({ store }, inject) => {
  // get a reference to the vuex store's state
  const { state } = store
  // inject an object of functions into the app
  inject(namespace, {
    value() {
      return helpers.value({ state, namespace })
    },
    adjust(adjustment) {
      return helpers.adjust({ state, store, namespace, adjustment })
    },
    log() {
      return helpers.log({ state, namespace })
    },
    message(string) {
      return helpers.message({ namespace, string })
    }
  })
}
