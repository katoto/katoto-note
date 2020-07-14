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

## 打包文件分析





