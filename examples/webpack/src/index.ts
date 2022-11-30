import isNull from 'lodash/isNull'
export { default as CommonJS } from './commonjs'

export function Index() {
  return isNull('test')
}