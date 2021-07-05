### Ajax（Async Javascript XML）
一种web数据交互方式，可以在不刷新页面的情况下，向服务器获取数据

##### 原理
基于<strong>XMLHttpRequest</strong>。<br>
当发送一个异步请求后，浏览器会调用http线程去处理请求。而当请求状态发生变化时，如果设置了回调，线程又会将状态变更事件放到任务队列中。
等待主线程去执行回调。

##### 使用
```
var xml = new XMLHttpRequest() // 创建XMLHttpRequest对象
xml.open(methods, url, async) // 规定请求类型、url、是否异步
xml.setRequestHeader(header, data)  // 设置发送头部信息
xml.send(data)  // 发送请求

/**
 * readystate: XMLHttpRequest对象的当前状态
 * 0: unsent 创建对象，未调用open
 * 1: opened open方法已调用
 * 2: headers-receive send方法已调用
 * 3: loading 响应体部分正在被接受
 * 4: down 请求操作已完成
 */
xml.onreadystatechange = function() {}  // 注册readystate改变事件
```

##### 常见状态码
1. 2xx 成功
  * 200 请求成功
  * 204 请求成功，no content

2. 3xx 重定向
  * 301 永久重定向
  * 302 临时重定向
  * 304 资源无改变，使用缓存

3. 4xx 客户端错误
  * 400 客户端语法错误
  * 403 被服务器拒绝
  * 404 请求资源不存在
  * 405 请求方法被服务器禁止
  * 413 请求体过长

4. 5xx 服务器错误
  * 500 服务器执行请求时发生错误
  * 502 服务器网关无响应
  * 503 服务器停机或重启
  * 504 网关或代理服务器超时

##### Axios
