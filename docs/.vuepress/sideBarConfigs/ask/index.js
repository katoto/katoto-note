const js = require('./js')
const csshtml = require('./csshtml');
const node = require('./node');
const vue = require('./vue');
const react = require('./react');
const webpack = require('./webpack');
const babel = require('./babel');
const mobile = require('./mobile');
const brower = require('./brower');
const algorithm = require('./algorithm');
const project = require('./project')

//灵魂拷问
module.exports = {
  // 必要的
  title: "灵魂拷问",
  // 可选的, 标题的跳转链接，应为绝对路径且必须存在
  path: "/灵魂拷问/",
  // 可选的, 默认值是 true,
  //collapsable: false,
  // 可选的, 默认值是 1
  //sidebarDepth: 1,
  children: [
    {
      title: 'JS八股文',
      path: '/灵魂拷问/JS八股文.md'
    },
    js,
    csshtml,
    node,
    vue,
    react,
    webpack,
    project,
    babel,
    mobile,
    brower,
    algorithm,
    {
      title: '开放性问题',
      children: [
        {
          title: '项目中的难点是什么',
          path: '/灵魂拷问/项目中的难点是什么.md'
        },
      ]
    },
  ],
};
