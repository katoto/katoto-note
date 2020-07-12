# 从零开始的Webpack

## 什么是Webpack

<img src="~@webpack/从零开始的Webpack/webpack介绍.png">

本质上，webpack 是一个现代 JavaScript 应用程序的 静态模块打包器(module bundler)

当 webpack 处理应用程序时，它会递归地构建一个 依赖关系图(dependency graph)

其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle

## 预备

### Symbol.toStringTag

Symbol.toStringTag 是一个内置 Symbol，Symbol.toStringTag 的值应该为字符串类型，这个字符串用来表示该对象的自定义类型标签

通常只有内置的 Object.prototype.toString() 方法会去读取这个标签并把它包含在自己的返回值里

#### 用 toStringTag 自定义类型

```javascript
var a = {}
a[Symbol.toStringTag] = 'a'
console.log('typeof a',Object.prototype.toString.call(a))// [object a]
```

### Object.create(null)



