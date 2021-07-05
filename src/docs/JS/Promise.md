### Promise
1. 本质上是一个函数返回的对象，用来表示一个异步操作的成功或失败。
2. 三种状态，状态只能从padding -> fulfilled或padding -> rejected改变
    * padding 初始状态
    * fulfilled 已完成
    * rejected 已拒绝
3. 状态只能改变一次

##### 作用
1. 解决回调地狱
2. 解决异步请求并发问题

##### 简易版实现
```
const PADDING = 'padding',
  FULFILLED = 'fulfilled'
  REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.state = null
    this.value = null
    this.reason = null

    this.resolveCB = []
    this.rejectCB = []

    try {
      executor(this.resolve, this.reject)
    } catch(err){
      this.reject(err)
    }
  }

  resolve(value) {
    if(this.state == PADDING) {
      this.value = value
      this.state = FULFILLED
    }

    while(this.resolveCB.length) {
      this.resolveCB.shift()()
    }
  }

  reject(reason) {
    if(this.state == PADDING) {
      this.reason = reason
      this.state = REJECTED
    }

    while(this.rejectCB.length) {
      this.rejectCB.shift()()
    }
  }

  then(onFulfilled, onRejected) {
    
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected == 'function' ? onRejected : err => { throw err }

    const p2 = new MyPromise((resolve, reject) => {
      if(this.state == PADDING) {
        this.resolveCB.push(() => {
          setTimtout(() => {
            try {
              const result = onFulfilled(this.value)
              resolvePromise(p2, result, resolve, reject)
            } catch(err) {
              reject(err)
            }
          })
        })
        this.rejectCB.push(() => {
          setTimtout(() => {
            try {
              const result = onRejected(this.reason)
              resolvePromise(p2, result, resolve, reject)
            } catch(err) {
              reject(err)
            }
          })
        })
      } else if(this.state == FULFILLED) {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value)
            resolvePromise(p2, result, resolve, reject)
          } catch(err) {
            reject(err)
          }
        })
      } else if(this.state == REJECTED) {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.reason)
            resolvePromise(p2, reason, resolve, reject)
          } catch(err) {
            reject(err)
          }
        })
      }
    })

    return p2
  }
}

function resolvePromise(originPromise, result, resolve, reject) {
  if(originPromise === result) {
    throw Error('xxx')
  }
  if(result instanceof MyPromise) {
    return result.then(resolve, reject)
  } else {
    resolve(result)
  }
}
```