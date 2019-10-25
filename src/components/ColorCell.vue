<template>
  <div class="color-cell" :style="style">
    {{ display }}
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import store from '@/store'
import { Color } from '@/store/colorList'

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
  height: 2.5em;
  font-size: 12px;
  line-height: 1;
  word-break: break-all;
}
</style>
