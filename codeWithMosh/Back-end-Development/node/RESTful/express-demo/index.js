const Joi = require('joi');          // 类名首字母大写
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
];

// 调用get方法创建路由规则
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found');
    res.send(course);
})

// post方法
app.post('/api/courses', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    
    try{
        const value = schema.validate(req.body.name);
    }
    catch(err) {
        res.status(400).send(err);
    }
    // schema.validate(req.body.name);
    // console.log(result);

    // // 输入检查
    // if (result.error) {
    //     // 400 Bad Request
    //     res.status(400).send(result.error);
    //     return;
    // }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.port || 3000;
app.listen(port, () => { console.log(`listening on port ${port}...`)});