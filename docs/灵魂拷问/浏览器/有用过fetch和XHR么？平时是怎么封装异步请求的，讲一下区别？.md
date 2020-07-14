# 有用过fetch和XHR么？平时是怎么封装异步请求的，讲一下区别？

## 相关问题

>

## 知识库

[**fetch的介绍和封装**](../../知识库/浏览器/fetch.md)

Promise

[**XHR的介绍和封装**](../../知识库/浏览器/XMLHttpRequest.md)

EventTarget

## 30s

## 展开

### 区别

#### 不同的实现方式

##### fetch

fetch 是 Fetch Api 在全局对象(Window)和Worker上的实现，实际上是 mixin 了 WorkerOrGlobalScope 这个实现

这意味着基本在任何场景下只要你想获取资源，都可以使用位于 WorkerOrGlobalScope 中的 fetch() 方法

平时调用的 window.fetch()/fetch() 方法，实际上执行的是 WorkerOrGlobalScope.fetch()，用于发起获取资源的请求

它返回一个 promise，这个 promise 会在请求响应后被 resolve，并传回 Response 对象

##### XHR

XMLHttpRequest 是一个构造函数，必须先调用 new XMLHttpRequest() 生成实例对象，才能使用其中的方法

XMLHttpRequest 基于 EventTarget 实现了 XMLHttpRequestEventTarget，用来处理 XMLHttpRequest 实例上发生的事件

本质上是基于事件的发布订阅模式

