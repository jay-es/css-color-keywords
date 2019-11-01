<template>
  <div id="app" class="section">
    <h1 class="h1 is-size-1 has-text-centered">CSS Color Keywords</h1>
    <section class="container filter-control">
      <filter-control />
    </section>
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
import { computed, createComponent } from '@vue/composition-api'
import { getters } from '@/store'
import ColorGroup from '@/components/ColorGroup.vue'
import FilterControl from '@/components/FilterControl.vue'

export default createComponent({
  name: 'App',
  components: { ColorGroup, FilterControl },
  setup() {
    const hueStep = computed(getters.hueStep)

    return {
      hueStep,
      groups: computed(() =>
        Array.from(
          { length: Math.ceil(360 / hueStep.value) },
          (_, i) => i * hueStep.value,
        ),
      ),
    }
  },
})
</script>

<style>
.h1 {
  margin: -0.5em 0 0.5em;
}

.container.filter-control {
  margin-bottom: 25px;
  max-width: 680px;
}
.color-table {
  display: flex;
  text-align: center;
}
</style>
