<template>
  <div class="color-cell" :style="style">
    {{ color.name }}
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
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
