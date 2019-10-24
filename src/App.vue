<template>
  <div id="app">
    <filter-control class="section" />
    <section class="section color-table">
      <color-group />
      <color-group
        v-for="g in groups"
        :key="g"
        :hue-min="g"
        :hue-max="g + hueStep"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'
import ColorGroup from '@/components/ColorGroup.vue'
import FilterControl from '@/components/FilterControl.vue'

export default Vue.extend({
  name: 'App',
  components: { ColorGroup, FilterControl },
  computed: {
    hueStep: () => store.hueStep,
    groups(): number[] {
      return Array.from(
        { length: Math.ceil(360 / this.hueStep) },
        (_, i) => i * this.hueStep,
      )
    },
  },
})
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.color-table {
  display: flex;
  width: 100%;
  text-align: center;
}
</style>
