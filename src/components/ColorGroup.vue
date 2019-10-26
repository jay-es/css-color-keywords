<template>
  <div class="color-group">
    <p class="color-group-label">
      {{ title }}<br />
      <small class="has-text-grey">({{ filtered.length }})</small>
    </p>
    <color-cell v-for="c in filtered" :key="c.name" :color="c" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getState, Color } from '@/store'
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
    colorList: getState('colorList'),
    cssLevel: getState('cssLevel'),
    litRange: getState('litRange'),
    satRange: getState('satRange'),
    showSyn: getState('showSyn'),
    isMono(): boolean {
      return !this.hueMin && !this.hueMax
    },
    groupColors(): Color[] {
      if (this.isMono) {
        return this.colorList.filter(v => v.hsl[1] === 0)
      }

      return this.colorList.filter(
        v => v.hsl[1] && v.hsl[0] >= this.hueMin && v.hsl[0] < this.hueMax,
      )
    },
    filtered(): Color[] {
      return this.groupColors.filter(({ hex, hsl, level }, i, a) => {
        if (hsl[1] > this.satRange[1] || hsl[1] < this.satRange[0]) {
          return false
        }

        if (hsl[2] > this.litRange[1] || hsl[2] < this.litRange[0]) {
          return false
        }

        if (hsl[2] > this.litRange[1] || hsl[2] < this.litRange[0]) {
          return false
        }

        if (!this.cssLevel.some(lv => level.includes(lv))) {
          return false
        }

        if (!this.showSyn && a.findIndex(v => v.hex === hex) !== i) {
          return false
        }

        return true
      })
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
}
.color-group-label {
  padding-bottom: 0.5em;
  line-height: 1;
}
</style>
