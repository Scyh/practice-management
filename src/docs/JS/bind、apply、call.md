### This指向
指向最后被调用时的对象

##### FUnction.prototype.call(thisArgs, arg1, arg2, ...)
提供新的this值给当前调用的函数
```
/**
 * Polyfill
 */
Function.prototype.call2 = function(context) {
  context.fn = this

  let args = []
  for(let i = 1, len = arguments.length; i < len; i++) {
    args.push(`arguments[${i}]`)
  }
  
  eval(`context.fn(${args})`)

  delete context.fn
}
```


##### Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]])
创建一个新的绑定函数；<br>
调用函数时，thisArg始终作为this值传递；<br>
优先用绑定函数时的参数，填充参数列表；<br>
可以使用new构造，提供的this值会被忽略，但前值参数仍会提供给模拟函数<br>
```
/**
 * 不支持使用new调用绑定函数
 */
Function.prototype.bind2 = function() {
  var fn = this,
    context = arguments[0],
    args = [].slice.call(arguments, 1)

  return function() {
    var innerArgs = [].slice.call(arguments)
      fnArgs = args.concat(innerArgs)
    
    fn.apply(context, fnArgs)
  }
}

/**
 * 支持使用new调用绑定函数
 */

Function.prototype.bind3 = function() {
  var fn = this,
    context = arguments[0],
    args = [].slice.call(arguments, 1),
    CacheFn = function() {},  // 中转函数，原型指向当前函数的原型
    newFn = function() {
      var innerArgs = [].slice.call(arguments)

      // this instanceof CacheFn ? this
      // 通过new构造时，绑定new之后的作用域，this指向新实例对象
      return fn.apply(this instanceof CacheFn ? this : context, args.concat(innerArgs))
    }

    CacheFn.prototype = fn.prototype
    newFn.prototype = new CacheFn()

    return newFn
}
```
##### FUnction.prototype.apply(thisArg[, argsArray])
为当前调用的函数，this执行一个对象
```
Function.prototype.apply2 = function() {
  var context = arguments[0]
  context.fn = this

  var args = []
  for(let i = 1, len = arguments.length; i++) {
    args.push(arguments[i])
  }

  eval("context.fn(" + args + ")")
  delete context.fn

  
}
```
##### 三者区别
1. apply与call的唯一区别是传参方式：call的参数需要一一列举，apply则接受一个参数组成的数组；
2. apply、call改变函数执行上下文后，立即执行；bind则是返回改变执行上下文的函数，而不执行；