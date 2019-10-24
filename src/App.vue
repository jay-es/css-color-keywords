<template>
  <div id="app">
    <div class="color-table">
      <color-group />
      <color-group
        v-for="g in groups"
        :key="g"
        :hue-min="g"
        :hue-max="g + deg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ColorGroup from './components/ColorGroup.vue'

export default Vue.extend({
  name: 'App',
  components: { ColorGroup },
  computed: {
    deg: () => 30,
    groups(): number[] {
      return Array.from({ length: 360 / this.deg }, (v, i) => i * this.deg)
    },
  },
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.color-table {
  display: flex;
  width: 100%;
  text-align: center;
}
</style>
