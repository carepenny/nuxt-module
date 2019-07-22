// store/modules/counter.js
export default options => ({
  namespaced: true,
  state: () => ({
    options,
    count: options.initialValue
  }),
  mutations: {
    adjust(state, data) {
      state.count += data
    }
  },
  getters: {
    count: state => state.count
  }
})
