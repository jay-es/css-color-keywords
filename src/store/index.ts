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

export const getState = <T extends keyof State>(key: T) => ({
  get: (): State[T] => state[key],
})

export const getAndSetState = <T extends keyof State>(key: T) => ({
  ...getState(key),
  set: (v: State[T]) => (state[key] = v),
})
