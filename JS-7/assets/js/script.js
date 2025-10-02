// *loops*

// Condition in looping:
// 1. intialization
// 2. condition
// 3. modification

// * while : it an entry control loop

// let i = 1;
// while(i <= 5){
// console.log(`${i}"Hello"`);
// i++;
// }

// console.log(i); here the output is 6 since it was trying add 1 to value of i since it's not 0, it is a true value

// let i = 1;
// while(i <= 5){
// console.log(parseInt(Math.random() * 100));
// i++;
// }

// console.log(i);

// * do while : it is an exit control loop, the code will run at least one time as the condition is checked at the end

// let i = 1;
// do {
//     console.log(parseInt(Math.random() * 100));
//     i++;
// } while (i <= 5);

// * for

// for(let i = 1; i <=5; i++){
// console.log(parseInt(Math.random() * 100));
// }

// let sum = 0;
// for(let i = 1; i <= 5; i++){
// sum += i;
// console.log(sum);
// }

// *forin loop: used for objects mostly.


// for (const key in object) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
   
// }

// const arr = [3, 5, 7];
// arr.foo ="hello";

// for (const i in arr) {
//     console.log(i);
// }

// *forof loop: used for arrays, map, set, arguments mostly.

// for (const element of object) {
// for (const i of arr) {
//     console.log(i);
// }    
// }
// as you can see above, forin iterates over property names, forof iterates over property values. They can also be used destructuring
// [The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. It can be used in locations that receive data (such as the left-hand side of an assignment or anywhere that creates new identifier bindings).]. 

// let a, b, rest;
// // [a, b] = [10, 20]
// [a,b,...rest] = [10, 20, 30, 40, 50];
// console.log(a);
// console.log(b);
// console.log(a,b,rest)

// for example, you can simultaneously loop over the keys and values of an object using Object.entries().

// *foreach lop:

// forEach is a built-in array method in JavaScript.
// It lets you run a function once for each element in an array.
// It’s often used instead of a traditional for loop when you just want to do something with every item.

// const numbers = [10, 20, 30]

// numbers.forEach(function(num, idx, arr){
//     console.log(`index ${idx} : ${num} array : ${arr}`)
// })

// array.forEach(element => {
    
// });

// *map

// it creates a new array after transforming each element.
// use when you want a transformed copy of an array.
// always returns a new array, never modifies the original one.

// const numbers = [1, 3, 5, 7];
// const squares = numbers.map(num => num*num);
// console.log(squares);

// *filter

// it creates an array with the elements that pass the given condition.
// use when you need a subset of an array.

// const numbers = [1, 2, 3, 4, 5, 6];
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens); 

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, num) => acc + num);
// console.log(sum)

// *reduce
