# React

- [视频链接](https://www.bilibili.com/video/BV1Sb411P79t?p=3&spm_id_from=pageDriver)

## 1- GettingStarted（28m）

### 1 - 创建开发环境

vs code插件：`Simple React Snippets` `prettier`

### 2 - 第一个React App

环境：Node >= 14.0.0 & npm >= 5.6

```bash
npx create-react-app react-app
```

zero-config setup:

- Development Server
- Webpack
- Babel

启动：

```bash
cd react-app
npm start
```

在本机的3000端口启动程序

![image-20220309182205571](README.assets/image-20220309182205571.png)

### 3 - hello world

删除`src/`下所有文件，新建`index.js`

```javascript
import React from "react"
import ReactDOM from "react-dom"

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

### 4 - 自定义配置

`package.json`

资深开发者：

```powershell
npm run eject
```

### 5 - 全栈架构（Full-stack Architecture）

![image-20220309184249001](README.assets/image-20220309184249001.png)

### 6 - 课程大纲

- Js
- Components
- Tables
- Forms
- Routing
- HTTP Services
- Auth
- Deployment

## 2- ES6 Refresher（48m）

- var、let & const

  - `var`作用域为function

  - `let`、`const`作用域为定义它的代码块 ✔

- Objects：一组键值对

- `this`

  this的值取决于函数是怎样被调用的

  ```js
  const person = {
  	name: "Mosh",
  	walk() {
  		console.log(this);
  	}
  };
  
  person.walk();
  
  const walk = person.walk;
  walk();    // undefined
  ```

  - 使用对象形式调用方法：`this`**always returns a referrence to the current object**
  - 使用单独的函数or对象外的函数：`this` 返回全局对象(浏览器中是windows对象，严格模式则被设置为未定义)

-   绑定`this`

  - 目标：设置为无论何时，this都指向对象本身
  - js中函数也是对象

  ```javascript
  const walk = person.walk.bind(person);
  walk();    
  ```

- Arrow Functions

```javascript
const square = function(number) {
	return number * number;
}
const square = number => number * numer;
```

箭头函数有用的地方：

```javascript
// filter jobs, where job is active
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
];

const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);
```

- Arrow Functions and this

箭头函数不会重新绑定`this`

```javascript
const person = {
	talk() {
		setTimeout(() => {
			console.log("this", this), 1000);
		}
	}
};
```

- Array.map()

  当要渲染列表时，要使用Array.map()

```javascript
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);
```

- Object Destructuring

```javascript
const address = {
	street: '';
	city: '';
	country: ''
};

const { street, city, country } = address;
const { street: st } = address;
```

- Spread Operator
  - 合并数组、对象
  - 克隆数组、对象

```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
const combined_a = [...first, 'a', ...second];

const first = { name: 'Mosh' };
const second = { job: 'Instructor' };
const combined = {...first, ...second, location: 'Australia'};
```

- Classes

```javascript
class Person {
	constructor(name) {
		this.name = name;
	}
	walk() {
		console.log("walk");
	}
}

const person = new Person("Lynn");
```

- Inheritance

```javascript
class Person {
	constructor(name) {
		this.name = name;
	}
	walk() {
		console.log("walk");
	}
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    
	teach() {
		console.log("teach");
	}
}

const teacher = new Teacher("Mosh", "MSc");
```

- Modules
  - 模块化上一个应用——分成多个文件
  - 模块内定义的对象默认是私有的，需要导出，外部才可以访问

```javascript
export class Person {
	constructor(name) {
		this.name = name;
	}
	walk() {
		console.log("walk");
	}
}
```

```javascript
import { Person } from './person';

export class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    
	teach() {
		console.log("teach");
	}
}
```

```javascript
import { Teacher } from "./Teacher";

const teacher = new Teacher("Mosh", "MSc");
teacher.teach();
```

- Named and Default Exports
  - Named Exports: `import { ... } from ''` 
  - Default Exports: `import ... from ''`
  - 可以一起用，如`import React, { Component } from 'react';`

## 3- Components（组件）

### 1 - Introduction

本章目标：

![image-20220310143738265](README.assets/image-20220310143738265.png)

### 2 - Setting Up the Project

```powershell
npx create-react-app counter-app
```

1.  安装bootstrap

```
npm i bootstrap@4.1.1
```

2. 在index.js中引入：

```javascript
import 'bootstrap/dist/css/bootstrap.css'
```

### 3 - 第一个React组件

在`src`下创建文件夹`components`，增加新文件`counter.jsx`

```jsx
import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return <h1>Hello World</h1>;
    }
}

export default Counter;
```

在`index.js`中导入`Counter`类，修改render对象为`Counter`

### 4 - Specifying Children

```jsx
class Counter extends Component {
    render() {
        return <div><h1>Hello World</h1><button>Increment</button></div>;
    }
}
```

or

```jsx
class Counter extends Component {
    render() {
        return <React.Fragment><h1>Hello World</h1><button>Increment</button></React.Fragment>;
    }
}
```

### 5 - Embedding Expressions（嵌入表达式）

不硬编码，动态显示值

`state`包含这个组件所需的数据

```jsx
class Counter extends Component {
    state = {
        count: 1
    };

    render() {
        return <React.Fragment><span>{this.state.count}</span><button>Increment</button></React.Fragment>;
    }
}
```

jsx表达式就像js对象一样

```jsx
class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        return <React.Fragment><span>{this.formatCount()}</span><button>Increment</button></React.Fragment>;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
```

### 6 - Setting Attributes

给元素设置属性

```jsx
styles = {
    fontSize: 5,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
```

### 7 - Rendering Classes Dynamically

```jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <span>Zero</span> : count;
  }
}

export default Counter;
```

### 8 - Rendering Lists

学习如何渲染一个列表

```jsx
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li id={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

### 9 - Conditional Rendering

目标：如果数组列表至少有一个项就渲染，如果没有就输出“没有任何标签”

- jsx中没有if语句，因此要回到js层面

方式一：

```jsx
class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>there is no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li id={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <div>{this.renderTags()}</div>;
  }
}
```

方式二：

- js不同于其他语言，逻辑符号&&可以连接非布尔值（js类真值、类假值）

```jsx
render() {
    return (
      <div>{this.state.tags.length === 0 && <p>please create a tag</p>}</div>
    );
  }
```

### 10 - Handling Events

- 所有react元素都有基于dom事件的属性，如button有onClick属性

```jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement() {
    console.log("Increment Clicked");
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <span>Zero</span> : count;
  }
}

export default Counter;
```

handleIncrement()函数内部无法访问this（未定义）

obj.method()和function()中this的区别

### 11 - Binding Events Handlers

解决方法一（手动绑定）：js对象有bind方法，返回该对象的新实例，可以设置this指向counter对象

```jsx
class Counter extends Component {
  state = {
    count: 0,
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment Clicked", this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
```

点击按钮，成功输出counter对象

解决方法二：箭头函数（不会重新绑定this，而是继承this）

```jsx
handleIncrement = () => {
    console.log("Increment Clicked", this);
};
```

### 12 - Updating the State

- setState()

```jsx
handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
};
```

### 13 - What Happens When State Changes

### 14 - Passing Event Arguments

箭头函数

```jsx
handleIncrement = (product) => {
    console.log("product:", product);
    this.setState({ count: this.state.count + 1 });
  };

<button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
```

### 15 - Setting Up the Vidly Project

```powershell
npx create-react-app vidly
```

安装两个库：`Bootstrap` `font awesome`

```powershell
cd vidly
npm i bootstrap@4.1.1 font-awesome@4.7.0
npm start
```

访问[getbootstrap.com](https://getbootstrap.com/)，在Examples目录找一个简单的模板，打开Framework-Starter template，查看网页源代码，注意body标签的部分

### 16 - Exercises

目标：

![image-20220311151847698](README.assets/image-20220311151847698.png)

### 17 - Building the Movies Component

index.js加上：

```javascript
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
```

App.js：

```javascript
import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movie";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
```

movie.jsx：

```jsx
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {};

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
```

效果：

![image-20220311160216354](README.assets/image-20220311160216354.png)

### 18 - Deleting a Movie

 movies.jsx：

```jsx
import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
```

### 19 - Conditional Rendering

 movies.jsx：

```jsx
import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There is no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
```

index.css加上：

```css
padding: 20px 0 0 0;
```

效果：

![image-20220311165833049](README.assets/image-20220311165833049.png)

![image-20220311165846976](README.assets/image-20220311165846976.png)
