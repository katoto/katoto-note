const webpack = require('./webpack')
const vue2 = require('./vue2')
const vue3 = require('./vue3')
const react = require('./react')

module.exports = {
  title: '手写的源码',
  path: '/手写的源码/',
  children: [
    webpack,
    vue2,
    vue3,
    react,
  ],
}