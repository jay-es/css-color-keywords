import Vue from 'vue'
import colorList from './colorList'

export type Color = {
  level: string
  keyword: string
  hex: string
  hsl: [number, number, number]
}
type Range = [number, number]
type State = typeof state
type Getters = { [K in keyof State]: () => State[K] }
type GetAndSetters = {
  [K in keyof State]: {
    get: () => State[K]
    set: (newVal: State[K]) => State[K]
  }
}

const state = {
  colorList: colorList as Color[],
  cssLevel: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
  dispProp: 'keyword' as 'keyword' | 'hex' | 'hsl',
  hueStep: 30,
  litRange: [0, 100] as Range,
  satRange: [0, 100] as Range,
  showSyn: false,
}

Vue.observable(state)

export const getters = {} as Getters
export const getAndSetters = {} as GetAndSetters

for (const key of Object.keys(state) as 'colorList'[]) {
  getters[key] = () => state[key]

  getAndSetters[key] = {
    get: () => state[key],
    set: (newVal: State[typeof key]) => (state[key] = newVal),
  }
}
