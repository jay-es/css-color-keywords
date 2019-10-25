import Vue from 'vue'

type Range = [number, number]

export default Vue.observable({
  cssLevel: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
  dispProp: 'keyword' as 'keyword' | 'hex' | 'hsl',
  hueStep: 30,
  litRange: [0, 100] as Range,
  satRange: [0, 100] as Range,
})
