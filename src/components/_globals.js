import Vue from 'vue'
import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'

const requireComponent = require.context(
  '.',
  true,
  /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(camelCase(
    fileName.split('/')
      .pop()
      .replace(/\.\w+$/, '')
  ))
  let arr = []
  arr.push(componentName)
  Vue.component(componentName, componentConfig.default || componentConfig)
})