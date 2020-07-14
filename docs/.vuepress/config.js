const path = require('path')

module.exports = {
  title: '前端知识地图',
  description: '前端知识地图',
  // plugins: ['autobar'],
  themeConfig: {
    sidebar: [
      {
        // 必要的
        title: '灵魂拷问',
        // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        path: '/灵魂拷问/',
        // 可选的, 默认值是 true,
        //collapsable: false,
        // 可选的, 默认值是 1
        //sidebarDepth: 1,
        children: [
          {
            title: '浏览器',
            children: {
              title: '浏览器页面资源加载',
              path: '/灵魂拷问/浏览器/'
            },
          },
        ]
      },
    ]
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