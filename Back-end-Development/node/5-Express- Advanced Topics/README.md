# 5- Express- Advanced Topics

- Middleware
- Configuration
- Debugging
- Templating Engines

## 1 - Middleware

- Middleware function: a function that takes a request object, and either returns a response to the client, or passes control to another middleware function.

- Request Processing Pipeline

  上一节的例子中：

  ![image-20220329150300471](README.assets/image-20220329150300471.png)

- Crosscutting Concerns，可以进行登录、验证、认证等
- Express总体来说就是一堆中间件函数

## 2 - 创建自定义中间件

- 一定要形成Request-Response闭环

![image-20220329151027762](README.assets/image-20220329151027762.png)

next()指传递给下一个中间件函数

## 3 - Express内置中间件

![image-20220329151456400](README.assets/image-20220329151456400.png)

## 4 - 第三方中间件

- [Express middleware (expressjs.com)](http://expressjs.com/en/resources/middleware.html)

如：helmet（http安全）、morgan（日志）

## 5 - 环境

- 开发环境

- 生产环境

只在开发环境中打开morgan 

```
npm i morgan
```

```javascript
const morgan = require('morgan');

// debug
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
}
```

需要设置环境变量NODE_ENV，否则就是默认的undefined

## 6 - 配置

- 如何保存应用的设置，并且在不同环境下复写
- 包：config / rc

创建config文件夹，default.json、development.json、production.json

- 密码等不能保存在配置文件中，而应该保存在环境变量中

  - config/custom-environment-variables.json

    ![image-20220329153326617](README.assets/image-20220329153326617.png)

![image-20220329153351898](README.assets/image-20220329153351898.png)

## 7 - Debugging

```
npm i debug
```

![image-20220329153735065](README.assets/image-20220329153735065.png)

![image-20220329153758205](README.assets/image-20220329153758205.png)

![image-20220329153838280](README.assets/image-20220329153838280.png)

取代console.log

## 8 - Templating Engines

- 有时需要向客户端返回HTML，此时要用到模板引擎（创建RESTful后端不需要）

![image-20220329154246616](README.assets/image-20220329154246616.png)

```
npm i pug
```

![image-20220329154434755](README.assets/image-20220329154434755.png)

![image-20220329154539648](README.assets/image-20220329154539648.png)

![image-20220329154616424](README.assets/image-20220329154616424.png)

## 9 - 集成数据库

- 官方参考文档：[Express database integration (expressjs.com)](http://expressjs.com/en/guide/database-integration.html)

![image-20220329154835140](README.assets/image-20220329154835140.png)

## 10 - Authentication

## 11 - Structuring Express App



