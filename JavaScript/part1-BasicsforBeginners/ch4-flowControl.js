// CH4 flow control

// // function 1
// let number = max(10, 3);
// console.log(number)

// function max(a, b) {
//     return (a > b) ? a : b;
// }


// // function 2
// console.log(isLandscape(800, 300))
// function isLandscape(width, height) {
//     // return (width > height) ? true : false; // 不专业
//     return (width > height);
// }

// // function 3
// const output = fizzBuzz('dasd');
// console.log(output);

// function fizzBuzz(input) {
//     if (isNaN(input)) {
//         return "Not a number";
//     } else {
//         if ((input % 3 === 0) && (input % 5 === 0)) {
//             return "fizzBuzz";
//         }
//         else if(input % 3 === 0) {
//             return "Fizz";
//         }
//         else if(input % 5 === 0) {
//             return "Buzz";
//         }
//         else {
//             return input;
//         }
//     }
// }

// // function 4
// console.log(checkSpeed(130));

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         return "ok";
//     }
//     else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12) {
//             return "License suspend";
//         }
//         else {
//             return points;
//         }
//     }
// }

// //function 5
// showNumbers(10);
// function showNumbers(limit) {
//     for(let i = 0; i <= limit; i++) {
//         const attr = (i % 2 === 0) ? "EVEN" : "ODD";
//         console.log(i,  attr);
//     }
// }

// //function 6
// // Falsy value: undefined null '' false 0 NaN
// const array = [0, null, undefined, '',1, 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let cnt = 0;
//     for (let value of array) {
//         if (value)
//             cnt++;
//     }
//     return cnt;
// }

// //function 7
// const movie = {
//     title : 'a',
//     releaseYear : 2018,
//     rating : 4.5,
//     director : 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'string')
//             console.log(key, obj[key]);
//     }
// }

// //function 8
// console.log(sum(10));

// function sum(limit) {
//     let sum = 0;

//     for (let i = 1; i <= limit; i++) {
//         if ((i % 3 === 0) || (i % 5 === 0))
//             sum += i;
//     }

//     return sum;
// }

// //function 9
// const marks = [80, 80, 50];
// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array) {
//         sum += value;
//     }

//     return sum / array.length;
// }

// // function 10
// showStar(10);

// function showStar(rows) {
//     for(let row = 1; row <= rows; row++) {
//         pattern = '';
//         for(let i = 0; i < row; i++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//     }
// }

// //function 11
// showPrimes(30);

// function showPrimes(limit) {
//     for(let number = 2; number <= limit; number++) 
    
//         if(isPrime(number)) 
//             console.log(number);
// }

// function isPrime(number) {
//     for(let factor = 2; factor < number; factor++) 
//         if(number % factor === 0) 
//             return false;
    
//     return true;
// }

