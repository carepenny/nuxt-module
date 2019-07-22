// plugins/helpers/counter.js
// functions to get, adjust and log the counter in the store
// the store module in question will be created with the namespace
// module option as it's name

// mini function to handle if no store, or no store module
// with our namespace exists
const storeModuleExists = ({ state, namespace }) => {
  if (!state || !state[namespace]) {
    console.error(`${namespace} nuxt module error: store not initialized`)
    return false
  } else {
    return true
  }
}

// function to return the current value of the count
export const value = ({ state, namespace }) => {
  // handle no store:
  if (!storeModuleExists({ state, namespace })) return undefined
  // return the counter vale from the store
  return state[namespace].count
}

// functions to adjust the counter
export const adjust = ({ state, store, namespace, adjustment }) => {
  // handle no store:
  if (!storeModuleExists({ state, namespace })) return undefined
  // the adjustment shoud be of type number, err if not
  if (typeof adjustment !== 'number') {
    return console.error(`${namespace} nuxt module error: adjustment should be of type 'number'.`)
  }
  // adjust the value of the counter using a store mutation
  return store.commit(`${namespace}/adjust`, adjustment)
}

// function to console log the current value of the count
export const log = ({ state, namespace }) => {
  // handle no store:
  if (!storeModuleExists({ state, namespace })) return undefined
  // get the current count from the store
  const { count } = state[namespace]
  // console log it
  return console.log(count)
}
