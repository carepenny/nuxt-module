<template lang="html">
  <div class="custom-counter">
    <!-- Basic html to render the current count and provide adjustment buttons -->
    <h1>Count is: {{ count }}</h1>
    <button class="custom-counter--button" @click="adjust(-1)">Minus</button>
    <button class="custom-counter--button" @click="adjust(+1)">Add</button>
  </div>
</template>

<script>
// components/lib/counterAdjuster.vue
export default {
  computed: {
    pluginOptions() {
      // _customCounterOptions will be added as a prop on component registration.
      // it will be the plugin's options object
      return this._customCounterOptions || {}
    },
    // helper to get the name of our injected plugin using the namespace option
    injectedPluginName() {
      const { pluginOptions } = this
      return pluginOptions.namespace ? '$' + pluginOptions.namespace : undefined
    },
    // helper to return the current value of the counter using our injected plugin function
    count() {
      const { injectedPluginName } = this
      return injectedPluginName
        ? this[injectedPluginName].value() // same as this.$count.value()
        : undefined
    }
  },
  methods: {
    // method to adjust the counter using our injected plugin function
    adjust(adjustment) {
      const { injectedPluginName } = this
      this[injectedPluginName].adjust(adjustment)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-counter {
  h1 {
    display: block;
    font-size: 2em;
    font-weight: bold;
    margin-top: 8px;
  }
  &--button {
    height: 36px;
    min-width: 64px;
    padding: 0 16px;
    margin: 4px;
    color: #fff;
    background-color: #1976d2;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #2f81d5;
    }
    &:active {
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
