const path = require('path')
const ask = require('./sideBarConfigs/ask')
const know = require('./sideBarConfigs/know')
const source = require('./sideBarConfigs/source')
const memo = require('./sideBarConfigs/memo')

module.exports = {
  title: '前端知识地图',
  description: '前端知识地图',
  // plugins: ['autobar'],
  themeConfig: {
    sidebar: [
      //灵魂拷问
      ask,
      //知识库
      know,
      //手写的源码
      source,
      //随手记
      memo,
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, './assets/img'),
        '@webpack': path.resolve(__dirname, './assets/img/手写的源码/从零开始的webpack源码')
      }
    }
  }
}