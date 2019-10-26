<template>
  <div class="color-cell" :style="style">
    {{ display }}
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { getState, Color } from '@/store'

export default Vue.extend({
  name: 'ColorCell',
  props: {
    color: {
      type: Object as PropType<Color>,
      required: true,
    },
  },
  computed: {
    dispProp: getState('dispProp'),
    display() {
      const val = this.color[this.dispProp]
      return Array.isArray(val) ? val.join(',') : val
    },
    style() {
      return {
        'background-color': this.color.hex,
        color: `hsla(0, 0%, ${this.color.hsl[2] > 45 ? 0 : 100}%, 0.75)`,
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
