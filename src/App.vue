<template>
  <div id="app" class="section">
    <h1 class="h1 is-size-1 has-text-centered">CSS Color Keywords</h1>
    <filter-control class="container is-fluid" />
    <section class="container is-fluid color-table">
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
.h1 {
  margin: -0.5em 0 0.5em;
}

.color-table {
  display: flex;
  width: 100%;
  text-align: center;
}
</style>
