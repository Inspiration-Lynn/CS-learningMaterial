# N-API quick start

- 参考：[从暴力到 NAN 再到 NAPI——Node.js 原生模块开发方式变迁 · 一个伪宅级别的码畜。 (xcoder.in)](https://xcoder.in/2017/07/01/nodejs-addon-history/)

## N-API介绍

- Native Addon

> *Addons* are **dynamically-linked shared objects written in C++**. The [`require()`](http://nodejs.cn/api/modules.html#requireid) function can load addons as ordinary Node.js modules. Addons provide an interface between JavaScript and C/C++ libraries.

- N-API

> Node-API (formerly N-API) is **an API for building native Addons**. It is independent from the underlying JavaScript runtime (for example, V8) and is maintained as part of Node.js itself. 
>
> This API will be Application Binary Interface (ABI) stable across versions of Node.js. It is intended to insulate addons from changes in the underlying JavaScript engine and allow modules compiled for one major version to run on later major versions of Node.js without recompilation. 

N-API将Node.js 的所有底层数据结构全部黑盒化，抽象成 N-API 当中的接口，这些接口是ABI(Application Binary Interface)稳定的，这使得在不同 Node.js 下，只要 ABI 的版本号一致，编译好的 C++ 扩展就可以直接使用，而不需要重新编译。

N-API 致力于以下的几个目标：

- 以 C 的风格提供稳定 ABI 接口；
- 消除 Node.js 版本的差异；
- 消除 JavaScript 引擎的差异（如 Google V8、Microsoft ChakraCore 等）。

由N-API暴露的API主要就是用来**创建和操作 JavaScript 的值**：

- 提供头文件 **node_api.h**；
- 任何 N-API 调用都返回一个 `napi_status` 枚举，来表示这次调用成功与否；
- N-API 的返回值由于被 `napi_status` 占坑了，所以真实返回值由传入的参数来继承，如传入一个指针让函数操作；
- 所有 JavaScript 数据类型都被黑盒类型 `napi_value` 封装，不再是类似于`v8::Object`、`v8::Number` 等类型；
- 如果函数调用不成功，可以通过 `napi_get_last_error_info` 函数来获取最后一次出错的信息。

> 详情参考[N-API文档](https://nodejs.org/docs/v8.0.0/api/n-api.html)

## 基本N-API数据类型

> 文档：[N-API | Node.js v8.0.0 Documentation (nodejs.org)](https://nodejs.org/docs/v8.0.0/api/n-api.html#n_api_basic_n_api_data_types)

N-API exposes the following fundamental datatypes as abstractions that are consumed by the various APIs. These APIs should be treated as opaque, introspectable only with other N-API calls.

### napi_status

任何 N-API 调用都返回一个 `napi_status` 枚举，来表示这次调用成功与否。

若N-API调用返回失败值，可通过`napi_get_last_error_info`函数来获取最后一次出错的信息。

常见用法：

```c
napi_value result;
napi_status status = napi_get_element(e object, i, &result);
if (status != napi_ok) {
  //do someting
}
```

### napi_extended_error_info

结构体，在调用函数不成功时存储了较为详细的错误信息。

### napi_env

表示一个上下文的变量

`napi_env` is used to represent a context that the underlying N-API implementation can use to persist VM-specific state. This structure is passed to native functions when they're invoked, and it must be passed back when making N-API calls. Specifically, the same `napi_env` that was passed in when the initial native function was called must be passed to any subsequent nested N-API calls. Caching the `napi_env` for the purpose of general reuse is not allowed.

### napi_value

用来表示JS值的不透明指针；所有 JavaScript 数据类型都被黑盒类型 `napi_value` 封装。

### N-API内存管理类型

#### napi_handle_scope

#### napi_escapable_handle_scope

#### napi_ref

### N-API回调类型

#### napi_callback_info

被传递给回调函数的不透明类型，有两种用途：

- 获取回调时的上下文信息
- 设置回调的返回值

#### napi_callback

Function pointer type for user-provided native functions which are to be exposed to JavaScript via N-API. Callback functions should satisfy the following signature:

```C
typedef void (*napi_callback)(napi_env, napi_callback_info);
```

#### napi_async_execute_callback

#### napi_async_execute_callback

## 错误处理

N-API使用返回值 & JS异常来做异常处理。

### 返回值

All of the N-API functions share the same error handling pattern. The return type of all API functions is `napi_status`

#### napi_get_last_error_info

### 异常

## 对象生命周期管理

### Making handle lifespan shorter than that of the native method

### References to objects with a lifespan longer than that of the native method

## 模块注册

N-API modules are registered in the same manner as other modules：

```c
NAPI_MODULE(addon, Init)
```

Init方法签名如下：

```c
void Init(napi_env env, napi_value exports, napi_value module, void* priv);
```

As with any other module, functions are exported by either adding them to the `exports` or `module` objects passed to the `Init` method.

For example, to add the method `hello` as a function so that it can be called as a method provided by the addon:

```c
void Init(napi_env env, napi_value exports, napi_value module, void* priv) {
  napi_status status;
  napi_property_descriptor desc =
    {"hello", Method, 0, 0, 0, napi_default, 0};
  status = napi_define_properties(env, exports, 1, &desc);
}
```

For example, to set a function to be returned by the `require()` for the addon:

```c
void Init(napi_env env, napi_value exports, napi_value module, void* priv) {
  napi_status status;
  napi_property_descriptor desc =
    {"exports", Method, 0, 0, 0, napi_default, 0};
  status = napi_define_properties(env, module, 1, &desc);
}
```

For example, to define a class so that new instances can be created (often used with [Object Wrap](https://nodejs.org/docs/v8.0.0/api/n-api.html#n_api_object_wrap)):

```c
// NOTE: partial example, not all referenced code is included

napi_status status;
napi_property_descriptor properties[] = {
    { "value", nullptr, GetValue, SetValue, 0, napi_default, 0 },
    DECLARE_NAPI_METHOD("plusOne", PlusOne),
    DECLARE_NAPI_METHOD("multiply", Multiply),
};

napi_value cons;
status =
    napi_define_class(env, "MyObject", New, nullptr, 3, properties, &cons);
if (status != napi_ok) return;

status = napi_create_reference(env, cons, 1, &constructor);
if (status != napi_ok) return;

status = napi_set_named_property(env, exports, "MyObject", cons);
if (status != napi_ok) return;
```

## Working with JavaScript Values

N-API exposes a set of APIs to create all types of JavaScript values.

Fundamentally, these APIs are used to do one of the following:

1. Create a new JavaScript object
2. Convert from a primitive C type to an N-API value
3. Convert from N-API value to a primitive C type
4. Get global instances including `undefined` and `null`

### Object Creation Functions

## Working with JavaScript Properties

Get and set properties on JavaScript objects.

Properties in JavaScript are represented as a tuple of a key and a value. Fundamentally, all property keys in N-API can be represented in one of the following forms:

- Named: a simple UTF8-encoded string
- Integer-Indexed: an index value represented by `uint32_t`
- JavaScript value: these are represented in N-API by `napi_value`. This can be a `napi_value` representing a String, Number or Symbol.

## Working with JavaScript Functions

N-API provides a set of APIs that allow JavaScript code to call back into native code. N-API APIs that support calling back into native code take in a callback functions represented by the `napi_callback` type. When the JavaScript VM calls back to native code, the `napi_callback` function provided is invoked. The APIs documented in this section allow the callback function to do the following:

- Get information about the context in which the callback was invoked.
- Get the arguments passed into the callback.
- Return a `napi_value` back from the callback.

### napi_call_function

This method allows a JavaScript function object to be called from a native add-on.

c代码中调用js函数

### napi_create_function*

This API allows an add-on author to create a function object in native code. This is the primary mechanism to allow calling *into* the add-on's native code *from* Javascript.

In order to expose a function as part of the add-on's module exports, set the newly created function on the exports object. A sample module might look as follows:

```c
void SayHello(napi_env env, napi_callback_info info) {
  printf("Hello\n");
}

void Init(napi_env env, napi_value exports, napi_value module, void* priv) {
  napi_status status;

  napi_value fn;
  status =  napi_create_function(env, NULL, SayHello, NULL, &fn);
  if (status != napi_ok) return;

  status = napi_set_named_property(env, exports, "sayHello", fn);
  if (status != napi_ok) return;
}

NAPI_MODULE(addon, Init)
```

Given the above code, the add-on can be used from JavaScript as follows:

```javascript
const myaddon = require('./addon');
myaddon.sayHello();
```

### napi_get_cb_info

## Object Wrap

N-API offers a way to "wrap" C++ classes and instances so that the class constructor and methods can be called from JavaScript.

1. The [`napi_define_class`](https://nodejs.org/docs/v8.0.0/api/n-api.html#n_api_napi_define_class) API defines a JavaScript class with constructor, static properties and methods, and instance properties and methods that correspond to the The C++ class.
2. When JavaScript code invokes the constructor, the constructor callback uses [`napi_wrap`](https://nodejs.org/docs/v8.0.0/api/n-api.html#n_api_napi_wrap) to wrap a new C++ instance in a JavaScript object, then returns the wrapper object.
3. When JavaScript code invokes a method or property accessor on the class, the corresponding `napi_callback` C++ function is invoked. For an instance callback, [`napi_unwrap`](https://nodejs.org/docs/v8.0.0/api/n-api.html#n_api_napi_unwrap) obtains the C++ instance that is the target of the call.