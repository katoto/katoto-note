# 从零开始的Webpack

## 什么是Webpack

<img src="~@webpack/从零开始的Webpack/webpack介绍.png">

本质上，webpack 是一个现代 JavaScript 应用程序的 静态模块打包器(module bundler)

当 webpack 处理应用程序时，它会递归地构建一个 依赖关系图(dependency graph)

其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle

## 预备知识

- [**Symbol.toStringTag**](https://yuartian.github.io/%E7%9F%A5%E8%AF%86%E5%BA%93/javascript%E9%AB%98%E7%BA%A7/Symbol/Symbol.toStringTag.html)
- [**Object.create(null)**](https://yuartian.github.io/%E7%9F%A5%E8%AF%86%E5%BA%93/javascript%E5%9F%BA%E7%A1%80/%E5%AF%B9%E8%B1%A1/Object.create.html\#object-create-null)
- [**Object.defineProperty 设置 getter**](https://yuartian.github.io/%E7%81%B5%E9%AD%82%E6%8B%B7%E9%97%AE/JS/Object.defineProperty%E7%9A%84%E5%BA%94%E7%94%A8.html)
- 按位与

## 最简单的webpack应用

**创建**

```bash
mkdir webpack-demo
cd webpack-demo
npm init -y
yarn add webpack webpack-cli
touch index.html
mkdir src
cd ./src
touch index.js
touch hello.js
```

**./index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>webpack-demo</title>
</head>
<script src="./dist/main.js"></script>
<body>
</body>
</html>
```

**./src/index.js**

```javascript
const hello = require('./hello.js')

console.log('say', hello)
```

**./src/hello.js**

```javascript
module.exports = 'hello'
```

**执行**

```bash
yarn run webpack -- --mode development
```

**查看index.html**

输出 say hello

## 分析打包文件

**./dist/main.js**

> 删除了部分注释和内部方法，更简洁一点

```javascript
(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {},
    });
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    module.l = true;
    return module.exports;
  }
	//先省略掉内部方法
  //像 __webpack_require__.s，__webpack_require__.p等的实现
  return __webpack_require__((__webpack_require__.s = "./src/index.js"));
})({
  "./src/hello.js": function (module, exports) {
    eval(
      "module.exports = 'hello'"
    );
  },
  "./src/index.js": function (module, exports, __webpack_require__) {
    eval("const hello = __webpack_require__(console.log('say', hello)");
  },
});
```



这样看打包后的代码的话，其实已经很好理解 webpack 所做的工作了

webpack