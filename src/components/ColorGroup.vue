<template>
  <div class="color-group">
    {{ title }}<br />
    <color-cell v-for="(c, i) in colors" :key="i" :color="c" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import colorList, { Color } from '@/store/colorList'
import ColorCell from './ColorCell.vue'

export default Vue.extend({
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
  computed: {
    isMono(): boolean {
      return !this.hueMin && !this.hueMax
    },
    colors(): Color[] {
      if (this.isMono) {
        return colorList.filter(v => v.hsl[1] === 0)
      }

      return colorList.filter(
        v => v.hsl[1] && v.hsl[0] >= this.hueMin && v.hsl[0] < this.hueMax,
      )
    },
    title(): string {
      return this.isMono ? 'Mono' : `${this.hueMin}~`
    },
  },
})
</script>

<style>
.color-group {
  flex: 1;
  word-break: break-all;
}
</style>
