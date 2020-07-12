const path = require('path')

module.exports = {
  title: '前端知识地图',
  description: '前端知识地图',
  plugins: ['autobar'],
  themeConfig: {
    // sidebar: 'auto'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, './assets/img'),
        '@webpack': path.resolve(__dirname, './assets/img/手写的源码/手写的Webpack')
      }
    }
  }
}