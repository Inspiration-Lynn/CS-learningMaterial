// CH6 - Array




// 6.1 Adding Elements
// const number = [3, 4];

// //End
// number.push(5, 6);

// //Beginning
// number.unshift(1, 2);

// //middle
// number.splice(2, 0, 'a', 'b');

// console.log(number);



// 6.2 Finding Elements(Primitives值类型)
// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf(1, 2));
// console.log(numbers.lastIndexOf(1));

// // 判断给定值是否存在
// // 法1
// console.log(numbers.indexOf(1) !== -1);
// // 法2
// console.log(numbers.includes(1));



// 6.3 Finding Elements(Reference Types)
// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// const course = courses.find(function(course) {
//     return course.name === 'xyz';
// });

// const courseIndex = courses.findIndex(function(course) {
//     return course.name === 'xyz';
// });

// console.log(course);
// console.log(courseIndex);



// 6.4 Arrow Functions
// const courses = [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
// ];

// const course = courses.find(course => course.name === 'a');

// console.log(course);



// 6.5 Removing Elements
// const numbers = [1, 2, 3, 4];

// End 
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// Beginning 
// const first = numbers.shift();
// console.log(first);

// Middle
// numbers.splice(2, 1);
// console.log(numbers);



// 6.6 Emptying an Array
// let numbers = [1, 2, 3, 4];
// let another = numbers;

// solution 1: 只有一个引用时有效(推荐)
// numbers = [];

// sulution 2:强制清空，多个引用时也可以(推荐)
// numbers.length = 0;

// solution 3
// numbers.splice(0, numbers.length);

// solution 4(不推荐)
// while (numbers.length > 0) {
//     numbers.pop();
// }

// console.log('another', another);
// console.log('number', numbers);



// 6.7 Combining and Slicing Arrays
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// const slice = combined.slice(2, 4);

// console.log(combined);
// console.log(slice);



// 6.8 The Spread Operator(拆分运算符) 实现6.7
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// const combined = [...first, ...second];

// const combined2 = [...first, 'a', ...second];

// const copy = [...combined];

// console.log(copy);



// 6.9 Iterating an Array
// const numbers = [1, 2, 3];

// // for (let number of numbers) 
// //     console.log(number);
// numbers.forEach((number, index) => console.log(index, number));



// 6.10 Joining Arrays
// 这个技巧在创建URL slug时有用
// const numbers = [1, 2, 3];
// const joined = numbers.join(',');
// console.log(joined);

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);



// // Execise-4 Moving an Element
// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, 2);

// console.log(output);

// function move(array, index, offset) {
//     insertPosition = index + offset;
//     if ((insertPosition < 0) || (insertPosition >= array.length) ) {
//         console.error('Invalid offset');
//         return;
//     }
        
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(insertPosition, 0, element);
    
//     return output;
// }



// Execise-5 Count Occurrences

//法1
// function countOccurrences(array, searchElement) {
//     let cnt = 0;
//     for (let value of array) {
//         if (value === searchElement) {
//             cnt++;
//         }
//     }

//     return cnt;
// }

// 法2-reduce
function countOccurrences(array, searchElement) {
    if ( !Array.isArray(array) ) 
        throw new Error('Not an array.');

    return array.reduce( (accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0 );
}


try {
    const numbers = [1, 2, 3, 4, 1];
    const count = countOccurrences(true, 1);
    console.log(count);
}
catch(e) {
    alert(e);
}



// // Exercise-6 Get Max
// const numbers = [1, 2, 3, 4, 5];

// const max = getMax([1, 4, 2, 3, 5]);

// console.log(max);

// //法1
// function getMax(array) {
//     if (array.length === 0) return undefined;

//     let maxValue = array[0];

//     for (let value of array) 
//         if (value > maxValue)
//             maxValue = value;

//     return maxValue;
// }

// //法2-reduce
// function getMax(array) {
//     if (array.length === 0) return undefined;

//     return array.reduce( (currentMax, currenValue) => {
//         return (currenValue > currentMax) ? currenValue : currentMax;
//     } );

//     // return array.reduce( (a, b) => (a > b) ? a : b);
// }


// Exercise-7 Movies
// const movies = [
//     { title: 'a', year: 2018, rating: 4.5 },
//     { title: 'b', year: 2018, rating: 4.7 },
//     { title: 'c', year: 2018, rating: 3 },
//     { title: 'd', year: 2017, rating: 4.5 },
// ];

// const titles = movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort( (a, b) => a.rating - b.rating )
//     .reverse()
//     .map(m => m.title);

// console.log(titles);

