# webpack的模块化实现

> 前面介绍了 webpack 中的最简单例子、打包结果 以及 一些内部函数
>
> 接下来我们依然借助这个最简单的例子，来看一下 webpack 是如何实现模块化 以及 支持多种模块化方案的

如果你还记得的话。。我们的文件结构是以下这样的

```
./index.html

./src/index.js

./src/hello.js

./dist/main.js
```

基本的模块化方式 以及 `__webpack_require__` 的实现已经分析过了

接下来，我们修改文件的内容，来看一下 webpack 是如何应对不同的模块化方案的

## CommonJS 加载 CommonJS

**index.js**

```js
let hello = require("./hello");
console.log(hello.name);
console.log(hello.age);
```

**hello.js**

```js
exports.name = "Yu";
exports.age = "18";
```

**main.js** 观察打包后的结果

```js
{
  "./src/index.js":
  (function(module, exports, __webpack_require__) {
    var hello = __webpack_require__("./src/hello.js");
    console.log(hello.name);
    console.log(hello.age);
  }),
    "./src/hello.js":
    (function(module, exports) {
      exports.name = 'Yu';
      exports.age = '18';
    })
}
```

可见对于 CommonJS 来讲，webpack 并不需要做过多的兼容处理

## CommonJS 加载 ESM

**index.js**

```js
let hello = require("./hello");
console.log(hello.default);
console.log(hello.age);
```

**hello.js**

```js
export default "Yu";
export const age = "18";
```

**main.js**

```js
{
  "./src/index.js":
  (function(module, exports, __webpack_require__) {
    var hello = __webpack_require__("./src/hello.js");
    console.log(hello["default"]);
    console.log(hello.age);
  }),
    "./src/hello.js":
    (function(module, exports, __webpack_require__) {
      __webpack_require__.r(exports);
      __webpack_require__.d(exports, "age", function() { return age; });
      exports["default"] = 'Yu';
      var age = '18';
    })
}
```

这次 webpack 针对 ESM 做了兼容处理，主要使用内部方法 `__webpack_require__.r` 和 `__webpack_require__.d`

对于，ESM 模块 webpack 先使用 `__webpack_require__.r` 将其标记为  `__esModule`

对于 `export` 使用 `__webpack_require__.d` 在导出对象 exports 上定义需要导出的属性 以及 对应的 getter 函数

将  `export default "Yu"` 语法转换为 `exports["default"] = 'Yu';`

## ESM 加载 ESM

**index.js**

```js
import name, { age } from "./hello";
console.log(name);
console.log(age);
```

**hello.js**

```js
export default "Yu";
export const age = "18";
```

**main.js**

```js
{
  "./src/index.js":
  (function(module, exports, __webpack_require__) {
    __webpack_require__.r(exports);
    var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/hello.js");
    console.log(_hello__WEBPACK_IMPORTED_MODULE_0__["default"]);
    console.log(_hello__WEBPACK_IMPORTED_MODULE_0__["age"]);
  }),
    "./src/hello.js":
    (function(module, exports, __webpack_require__) {
      __webpack_require__.r(exports);
      __webpack_require__.d(exports, "age", function() { return age; });
      exports["default"] = 'Yu';
      var age = 18;
    })
}
```

## ESM 加载 CommonJS

**index.js**

```js
import name, { age } from "./hello";
console.log(name);
console.log(age);
```

**hello.js**

```js
module.exports = {
  name: "Yu",
  age: 18,
};
```

**main.js**

```js
{
  "./src/index.js":
  (function (module, exports, __webpack_require__) {
    __webpack_require__.r(exports);
    var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      "./src/hello.js"
    );
    var _hello__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_hello__WEBPACK_IMPORTED_MODULE_0__);
    console.log(_hello__WEBPACK_IMPORTED_MODULE_0___default.a);
    console.log(_hello__WEBPACK_IMPORTED_MODULE_0__["age"]);
  }),
    "./src/hello.js":
    (function (module, exports) {
      module.exports = {
        name: "Yu",
        age: 18,
      };
    })
}
```





