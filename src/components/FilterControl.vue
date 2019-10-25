<template>
  <div class="columns is-tablet">
    <div class="column">
      <b-field label="Saturation Range">
        <b-slider v-model="satRange" :min="0" :max="100" :step="5" />
      </b-field>
      <b-field label="Lightness Range">
        <b-slider v-model="litRange" :min="0" :max="100" :step="5" />
      </b-field>
      <b-field label="Hue Step">
        <b-slider v-model="hueStep" :min="20" :max="90" :step="5" />
      </b-field>
    </div>
    <div class="column">
      <div class="block">
        <label class="label">Display</label>
        <b-radio v-model="dispProp" native-value="name">Name</b-radio>
        <b-radio v-model="dispProp" native-value="hex">RGB Hex</b-radio>
        <b-radio v-model="dispProp" native-value="hsl">HSL</b-radio>
      </div>
      <div class="block">
        <label class="label">CSS Level</label>
        <b-checkbox v-model="cssLevel" native-value="Level 1">
          Level 1
        </b-checkbox>
        <b-checkbox v-model="cssLevel" native-value="Level 2">
          Level 2
        </b-checkbox>
        <b-checkbox v-model="cssLevel" native-value="Level 3">
          Level 3
        </b-checkbox>
        <b-checkbox v-model="cssLevel" native-value="Level 4">
          Level 4
        </b-checkbox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '@/store'

export default Vue.extend({
  name: 'FilterControl',
  computed: {
    cssLevel: {
      get: () => store.cssLevel,
      set: v => (store.cssLevel = v),
    },
    dispProp: {
      get: () => store.dispProp,
      set: v => (store.dispProp = v),
    },
    hueStep: {
      get: () => store.hueStep,
      set: v => (store.hueStep = v),
    },
    litRange: {
      get: () => store.litRange,
      set: v => (store.litRange = v),
    },
    satRange: {
      get: () => store.satRange,
      set: v => (store.satRange = v),
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
