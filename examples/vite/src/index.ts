import isNull from 'lodash/isNull'
export { default as CommonJS } from './commonjs'

export default function Index() {
  return isNull('test')
}