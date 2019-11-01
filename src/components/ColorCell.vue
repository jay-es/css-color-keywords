<template>
  <div class="color-cell" :style="style">
    {{ display }}
  </div>
</template>

<script lang="ts">
import { computed, createComponent, ref } from '@vue/composition-api'
import { getters, Color } from '@/store'

export default createComponent({
  name: 'ColorCell',
  props: {
    color: {
      type: Object as () => Color,
      required: true,
    },
  },
  setup({ color }) {
    const display = computed(() => {
      const val = color[getters.dispProp()]
      return Array.isArray(val) ? val.join(',') : val
    })

    return {
      display,
      style: ref({
        'background-color': color.hex,
        color: `hsla(0, 0%, ${color.hsl[2] > 45 ? 0 : 100}%, 0.75)`,
      }),
    }
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
