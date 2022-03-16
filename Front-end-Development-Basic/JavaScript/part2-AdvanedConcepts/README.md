# Object-oriented Programming in JavaScript

## Getting Started

### 1 - What is OOP

### 2 - Four Pillars of OOP

- Encapsulation - 封装
  - 组合相关变量和函数 - **减少复杂性 + 增加重用性**
- Abstraction - 抽象
  - 接口更简单 - **减少复杂性**
  - **隔离代码更改的影响**
- Inheritance - 继承
  - **减少冗余代码**
- Polymorphism - 多态
  - **摆脱冗长的if/else或switch/case语句**

## Objects

### 1 - Introduction

创建对象：

- Object Literals
- Factories
- Constructors

### 2 - Object Literals（对象创建语法）

Js中的对象实际上是一组键值对的集合

```javascript
const circle {
	radius: 1,
 	location: {
		x: 1,
        y: 1
    },
    draw: function() {
		console.log('draw');
    }
}
```

- radius、location为**属性**（保存值）

- draw为**方法**（定义逻辑）

### 3 - Factories

当对象具有行为性时，使用工厂函数和构造函数来创建对象，而不要用对象创建语法。

注意命名：驼峰式

```javascript
// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();
```

### 4 - Constructors

注意命名

```javascript
// Constructor function
function Circle(radius) {
    this.radiu = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();
```

使用`new`操作符，发生了3件事：

1. 创建一个空对象
2. 设置`this`指向这个对象
3. 从函数返回对象