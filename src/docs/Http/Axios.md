### Axios

初始化过程中，根据config实例化Axios，并返回一个包裹函数，该包裹函数实际会返回一个作用域指向axios实例的request函数，然后将Axios原型上的方法挂载到该包裹函数中

```javascript
function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
	
    // 返回一个包裹函数
    var instance = bind(Axios.prototype.request, context);
    
    // Copy axios.prototype to instance
    // 复制原型上的属性和方法
    // 例如getUri、get、post、delete等
    utils.extend(instance, Axios.prototype, context);

    // Copy context to instance
    utils.extend(instance, context);

    return instance;
}

// 默认实例
var axios = craeteInstance(defaults)

// 对外暴露创建实例方法Cancel、CancelToken、all等
// ..
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// 对外暴露默认实例
module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;
```

每次发起请求，实际都是调用request的dispatchRequest发起请求

```javascript
function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    
    // 实例化拦截器
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}

// 核心请求方法
Axios.prototype.request = function request(config) {
    
	// Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
        config = arguments[1] || {};
        config.url = arguments[0];
    } else {
        config = config || {};
    }
    
    config = mergeConfig(this.defaults, config);

    // Set config.method
    if (config.method) {	// 设置了method
        config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {	// 默认配置中的method
        config.method = this.defaults.method.toLowerCase();
    } else {
        config.method = 'get';
    }
    
	// 初始化拦截器
    // 是否是同步请求
    var synchronousRequestInterceptors = true;
    
    var promise
    
    // 异步请求逻辑
    if(!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, undefined]
		// 处理拦截器        
        
        // 执行request拦截器，发请求，执行response拦截器
        while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
        }
        return Promise
    }
    

    // 同步请求逻辑
    var newConfig = config
    
    // 处理request拦截器
    
	// 发起请求
    try {
        promise = dispatchRequest(newConfig);
    } catch(err) {
        return Promise.reject(error);
    }
    
    // 处理responese拦截器
    
    return promise;
}

// 扩展post、put、patch方法，核心还是调用request
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
```

```javascript
function dispatchRequest(config) {
    // 做config做一些处理
    // 设置headers、data
    
    // adapter 发起请求
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(
        function onAdapterResolution(responese) {
            // Transform response data
            
            return response;
        },
        function onAdapterRejection(reason) {
            // Transform response data
            
            return Promise.reject(reason);
        }
    )
}

// 区分浏览器环境和node环境
function getDefaultAdapter() {
    var adapter;
	
    if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = require('./adapters/xhr');
    } else if (typeof process !== 'undefined' && 	Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = require('./adapters/http');
    }
    return adapter;
}
```

基于XMLHttpRequest，返回一个Promise对象

整体流程：

​	实例化XMLHttpRequest

​	初始化请求

​	添加请求结束处理回调

​	设置头部信息

​	添加cancelToken处理

​	发起请求

```javascript
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        
        // 实例化XMLHttpRequest
        var request = new XMLHttpRequest();
        
        // 生成完成请求路径，并初始化请求
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        
        // 定义请求结束处理函数
        function onloadend() {
            if (!request) {
                return;
            }
			// .. 
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
			
            settle(resolve, reject, response);

            // Clean up request
            request = null;
        }
        
        // 如果支持onloadend回调，则直接使用该回调
        if('onloadend' in request) {
            request.onloadend = onloadend;
        } else {
            // 否则监听readystatechange事件
            // 调用onloadend回调
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }

                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        
        // 定义一些异常回调处理
        request.onabort = function handleAbort() {
            reject(createError('Request aborted', config, 'ECONNABORTED', request));
            request = null;
        };
        request.onerror = function handleError() {
            reject(createError('Network Error', config, null, request));
            request = null;
        };
        request.ontimeout = function handleTimeout() {}
        
        // 添加xsrf防范
        // ..
        
        // 通过setRequestHeader设置请求头信息
		if('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
            })
        }
        
        // 添加一些其他的请求头信息
        // withCredentials、responseType
        
        // 添加一些事件回调
        
        // 添加cancelToken处理，取消请求
        if(config.cancelToken) {
            config.cancelToken.promise.then(function onCanceled(cancel) {
                
                request.abort()
                reject(cancel)
                request = null
            })
        }
        
        // 发送请求
        request.send(requestData);
    })
}
```

拦截器实现原理：

​	1. 实例化Axios时，会初始化拦截器new InterceptorManager()

​	2. 实例化InterceptorManager时，内部维护了一个handler数组，use会将回调组装成一个对象，push到数组中，并返回拦截器Id；eject则根据Id移除回调；

 3. 在发起请求之前，执行request拦截器；请求结束之后，通过Promise.then执行response拦截器	

    

```javascript
function InterceptorManager() {
    this.handles = [];
}
InterceptorManager.prototype.use = function use(fulfilled, reject, options) {
    // 添加到维护的回调数组中
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    // 返回当前拦截器的Id
    return this.handlers.length - 1;
}
InterceptorManager.prototype.eject = function eject(id) {
    // 直接将id对应的回调对象置为null
    if(this.handles[id]) {
        this.handles[id] = null;
    }
}
```

通过上面了解到，发起请求实际都调用的request方法，拦截器也是在这个方法中进行处理

```javascript
Array.prototype.request = function request(config) {
    // ..
    
    // 初始化request拦截器数组
	var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;	// 同步请求拦截器标识位
    
    // 遍历request拦截器并将其添加到requestInterceptorChain中
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
            return;
        }
        // 判断是否是同步请求
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    
    // 初始化response拦截器数组
    var responseInterceptorChain = [];
    // 遍历并添加到responseInterceptorChain数组中
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    
    // 异步请求的处理逻辑
    if(!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, undefined];
        // 将request拦截器和response拦截器按顺序组合成数组
        // 最后组合结果：[...requestInterceptorChain, dispatchRequest, responseInterceptorChain]
        // 即，先执行request拦截器，发起请求，执行response拦截器
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
	    chain.concat(responseInterceptorChain);
        
        promise = Promise.resolve(config)	// 使用resolve包裹config，利用值传递config
        
        // 执行拦截器，发起请求
        while(chain.length) {
            promise = promise.then(chain.shift(), chain.shift())
        }
        
        return promise
    }
    
    // 同步请求逻辑
    // 执行request拦截器，生成新的配置项
    var newConfig = config;
    while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    
    // 发起请求
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    
    // 执行response拦截器
    while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }

    return promise;
}
```

