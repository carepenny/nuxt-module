// debug.js
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { debug, namespace } = options
if (debug) {
  console.log(`${namespace} options: `, options)
}
