const path = require('path')
const sidebarConfig = require('./sidebar.config.json')

module.exports = {
  title: '前端知识地图',
  description: '前端知识地图',
  themeConfig: {
    sidebar: sidebarConfig
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, './assets/img'),
        // '@img': './assets/img',
        '@webpack': path.resolve(__dirname, './assets/img/手写的源码/从零开始的webpack源码')
      }
    }
  }
}
