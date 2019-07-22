// debug.js
const options = <%= JSON.stringify(options) %>
const { debug, namespace } = options
if (debug) {
  console.log(`${namespace} options: `, options)
}
