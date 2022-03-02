// CH7



// // 7.1 function declaration vs. function expression
// // function declaration
// function walk() {
//     console.log('walk');
// }

// // Anonymous function expression
// let run = function() {
//     console.log('run');
// };

// run();
// let move = run;
// move();

// // named function expression
// let run1 = function walk() { };



// 7.2 hoisting: 函数声明（自动）提前到代码顶端



// 7.3 arguments
// 弹性函数实现求和
// function sum() {
//     let total = 0;
//     for (let value of arguments) {
//         total += value;
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6));



// 7.4 The Rest Operator
// 可变参数
// function sum(...args) {
//     return args.reduce( (a, b) => a + b );
// }

// console.log(sum(1,2,3,4,5,6,7));

// 一个具体的购物车例子
// function sum(discount, ...prices) {
//     const total = prices.reduce( (a, b) => a + b);
//     return total * (1-discount);
// }

// console.log(sum(0.1, 1,2,3,4,5,6,7));



// 7.5 default parameters
// function interest(principal, rate = 3.5, year = 5) {
//     return principal * rate / 100 * year;
// }



// 7.6 Getter & Setter
// 7.7 Try and Catch
// const person = {
//     firstName: 'Lynn',
//     lastName: 'Wang',
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error('value is not a string.');

//         const parts = value.split(' ');
//         if ( parts.length !==2 )
//             throw new Error('Enter a first and last name.');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try {
//     person.fullName = '';
// }
// catch (e) {
//     alert(e);
// }

// console.log(person);



// 7.8 Local and Global scope



// 7.9 Let vs. Var
// var => function-scoped(避免使用)
// ES6: let const => block-scoped 



// 7.10 this
// method -> obj
// function -> global( window, global )

// 7.11 change the value of 'this'
// 1.用self作为中继变量 2.bind 3.箭头函数




// Exercise-1 Sum of Arguments
// function sum(...args) {
//     if (args.length == 1 && Array.isArray(args[0]))
//         args = [...args[0]];

//     return args.reduce( (a, b) => a + b);
// }

// console.log( sum([1, 2, 3, 4]) );



// Exercise-2 Area of Circle
// const circle = {
//     radius: 2,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area);










