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

// array.forEach(element => {
    
// });

// *map

// *filter

// *reduce
