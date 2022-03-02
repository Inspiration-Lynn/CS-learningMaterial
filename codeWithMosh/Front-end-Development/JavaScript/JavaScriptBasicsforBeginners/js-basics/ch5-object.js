// // CH5 OOP



// 5.4 constructor property
// 5.1 Factory Function
// Camel_Notation: oneTwoThreeFour
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const myCircle = createCircle(2);
// myCircle.draw();



// // 5.2 Constructor Function
// // Pascal Notation: OneTwoThreeFour
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);
// circle.draw();



// // 5.3 Dynamic Nature of Objects
// const circle = {
//     radius: 1
// };

// circle.color = 'yellow';
// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

// console.log(circle);



// 5.5 Functions are objects



// 5.6 Value vs Reference Types
// Primitives are copied by their value, 
// Objects are copied by their reference (Reference Types: object, function, array)
// let x = { value: 10};
// let y = x;

// x.value = 20;

// let number = 10;
// function increase(number) {
//     number++;
// }

// increase(number);

// let obj = { value: 10 };
// function increase(obj) {
//     obj.value++;
// }
// increase(obj);
// console.log(obj.value);



// 5.7 Enumerating Properties of an Object
// for-in / for-of 遍历一个数组或对象
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for(let key in circle) {
//     console.log(key, circle[key]);
// }

// // for-of 组合只能用作可枚举的类型(iterable),如数组和映射(map)
// // object are not iterable
// for(let key of Object.keys(circle)) {
//     console.log(key);
// }
// for(let entry of Object.entries(circle)) {
//     console.log(entry);
// }

// if('radius' in circle) console.log('yes');



// 5.8 cloning an object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// 法1：old
// const another = {};
// for(let key in circle) {
//     another[key] = circle[key];
// }

// 法2
// const another = Object.assign( {
//     color: 'yello'
// }, circle);

// 法3-simpliest
// const another = { ...circle };

// console.log(another);



// 5.9 Garbage Collection
// JS Engine has Garbage Collector (allocate & deallocate 自动)


// 5.10 build-in objects in JS - Math 
// 5.11 build-in objects in JS- String & Template Literals 
// 5.12 build-in objects in JS - Date




// // Exercise 1 - Address Object
// let address = {
//     street: 'a',
//     city: 'b',
//     zipcode: 'c'
// };

// function showAddress(address) {
//     for(let key in address) {
//         console.log(key, address[key]);
//     }
// }

// showAddress(address);



// Exercise 2 - Factory and Constructor Functions
// // factory function
// function createAddress(street, city, zipcode) {
//     return {
//         street,
//         city,
//         zipcode,
//     };
// }

// const myAddress = createAddress('qingzhouStreet', 'weihai', '123456');
// console.log(myAddress);

// // constructor function
// function CreateAddress(street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }

// const myAddress = new CreateAddress('qingzhouStreet', 'weihai', '12345');
// console.log(myAddress);



// Exercise 3 - Object Equality
// function CreateAddress(street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }

// const myAddress1 = new CreateAddress('qingzhouStreet', 'weihai', '12345');
// const myAddress2 = new CreateAddress('qingzhouStreet', 'weihai', '12345');
// let myAddress3 = myAddress1;

// function areEqual(address1, address2) {
//     for(let key in address1) 
//         if (address1[key] !== address2[key])
//             return false;
//     return true;
// }

// function areSame(address1, address2) {
//     return address1 === address2;
// }

// const equalFlag = areEqual(myAddress1, myAddress2);
// console.log('areEqual: ', equalFlag);

// const sameFlag = areSame(myAddress1, myAddress3);
// console.log('areSame: ', sameFlag);



// Exercise 4 - Blog Post Object
// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         { author: 'a', body: 'b'},
//         { author: 'c', body: 'd'},
//     ],
//     isLive: true
// };

// console.log(post);



// // Exercise 5 - Constructor Functions
// function CreateBlog(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }

// let post = new CreateBlog('learn JS', 'learn JS with Mosh', 'Mosh');
// console.log(post);



// // Exercise 6 - Price Range Object
// let priceRange = [
//     { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
//     { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
//     { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
// ];