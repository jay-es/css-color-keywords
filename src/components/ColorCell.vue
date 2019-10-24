<template>
  <div class="color-cell" :class="isVisible || 'is-hidden'" :style="style">
    {{ display }}
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import store from '@/store'
import { Color } from '@/store/colors'

export default Vue.extend({
  name: 'ColorCell',
  props: {
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
  },
  computed: {
    display() {
      const val = this.color[store.dispProp]
      return Array.isArray(val) ? val.join(',') : val
    },
    isVisible() {
      const { hsl, level } = this.color as Color

      if (hsl[1] > store.satRange[1] || hsl[1] < store.satRange[0]) {
        return false
      }

      if (hsl[2] > store.litRange[1] || hsl[2] < store.litRange[0]) {
        return false
      }

      if (hsl[2] > store.litRange[1] || hsl[2] < store.litRange[0]) {
        return false
      }

      return store.cssLevel.some(v => level.includes(v))
    },
    style() {
      const color = this.color as Color

      return {
        'background-color': color.hex,
        color: `hsla(0, 0%, ${color.hsl[2] > 45 ? 0 : 100}%, 0.75)`,
      }
    },
  },
})
</script>

<style>
.color-cell {
  position: relative;
  margin: -1px;
  padding: 0.25em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 2em;
  font-size: 12px;
  line-height: 1;
}
</style>
