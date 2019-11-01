<template>
  <div class="color-group">
    <p class="color-group-label">
      {{ title }}<br />
      <small class="has-text-grey">({{ filtered.length }})</small>
    </p>
    <color-cell v-for="c in filtered" :key="c.keyword" :color="c" />
  </div>
</template>

<script lang="ts">
import { computed, createComponent } from '@vue/composition-api'
import { getters } from '@/store'
import ColorCell from './ColorCell.vue'

export default createComponent({
  name: 'ColorGroup',
  components: { ColorCell },
  props: {
    hueMax: {
      type: Number,
      default: 0,
    },
    hueMin: {
      type: Number,
      default: 0,
    },
  },
  setup({ hueMax, hueMin }) {
    const colorList = getters.colorList()
    const cssLevel = computed(getters.cssLevel)
    const litRange = computed(getters.litRange)
    const satRange = computed(getters.satRange)
    const showSyn = computed(getters.showSyn)

    const isMono = !hueMin && !hueMax
    const title = isMono ? 'Mono' : `${hueMin}~`

    const groupColors = isMono
      ? colorList.filter(({ hsl: [, s] }) => s === 0)
      : colorList.filter(({ hsl: [h, s] }) => !!s && h >= hueMin && h < hueMax)

    const filtered = computed(() =>
      groupColors.filter(({ hex, hsl, level }, i, a) => {
        if (hsl[1] > satRange.value[1] || hsl[1] < satRange.value[0]) {
          return false
        }

        if (hsl[2] > litRange.value[1] || hsl[2] < litRange.value[0]) {
          return false
        }

        if (!cssLevel.value.some(lv => level.includes(lv))) {
          return false
        }

        if (!showSyn.value && a.findIndex(v => v.hex === hex) !== i) {
          return false
        }

        return true
      }),
    )

    return {
      filtered,
      groupColors,
      isMono,
      title,
    }
  },
})
</script>

<style>
.color-group {
  flex: 1;
}
.color-group-label {
  padding-bottom: 0.5em;
  line-height: 1;
}
</style>
