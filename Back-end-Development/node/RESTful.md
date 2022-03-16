## 使用Express创建你的第一个web server

环境构建

```
npm init --yes
npm i express
```

1. 导入`express`

   ```javascript
   const express = require('express');
   const app = express();
   ```

2. 调用get方法创建路由规则

   ```javascript
   app.get('/', (req, res) => {
       res.send('Hello World!');
   });
   ```

3. 端口监听(`port`优先作为环境变量导入)

   ```javascript
   const port = process.env.port || 3000;
   app.listen(port, () => { console.log(`listening on port ${port}...`)});
   ```

- `nodemon` node程序监视

  ```
  npm i -g nodemon
  ```

4. `post`方法 (输入检查)

   ```javascript
   app.post('/api/courses', (req, res) => {
       // 输入检查
       if (!req.body.name || req.body.name.length < 3) {
           // 400 Bad Request
           res.status(400).send('Name is required and should be minimum 3 characters');
           return;
       }
   
       const course = {
           id: courses.length + 1,
           name: req.body.name
       };
       courses.push(course);
       res.send(course);
   });
   ```

   - `post`请求：vscode插件 `Postcode`

     代码中添加：`app.use(express.json());`

   - 输入检查：

     ```
     npm i joi
     ```

     