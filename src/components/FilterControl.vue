<template>
  <div class="columns is-tablet">
    <div class="column">
      <b-field label="Saturation Range">
        <b-slider v-model="satRange" :min="0" :max="100" :step="5" rounded />
      </b-field>
      <b-field label="Lightness Range">
        <b-slider v-model="litRange" :min="0" :max="100" :step="5" rounded />
      </b-field>
      <b-field label="Hue Step">
        <b-slider v-model="hueStep" :min="20" :max="90" :step="5" rounded />
      </b-field>
    </div>
    <div class="column is-narrow">
      <div class="field">
        <label class="label">Display</label>
        <b-radio v-model="dispProp" native-value="keyword">Keyword</b-radio>
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
      <div class="field">
        <b-switch v-model="showSyn">
          Show Synonyms
        </b-switch>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, createComponent } from '@vue/composition-api'
import { getAndSetters } from '@/store'

export default createComponent({
  name: 'FilterControl',
  setup: () => ({
    cssLevel: computed(getAndSetters.cssLevel),
    dispProp: computed(getAndSetters.dispProp),
    hueStep: computed(getAndSetters.hueStep),
    litRange: computed(getAndSetters.litRange),
    satRange: computed(getAndSetters.satRange),
    showSyn: computed(getAndSetters.showSyn),
  }),
})
</script>

<style scoped>
@media (min-width: 769px) {
  .column:nth-child(2) {
    margin-left: 1em;
  }
}

.b-radio:nth-last-child(n + 2),
.b-checkbox:nth-last-child(n + 2) {
  margin-right: 0.5em;
}
.switch >>> .check {
  font-size: 85%;
}
</style>
