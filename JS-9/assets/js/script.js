// function cube(num){
//     return Math.pow(num, 3)
// }

// console.log(cube(7));

// nested functions :

// function maths(a, b, op){
//     function add(a, b){
//         return a + b;
//     }
//     function sub(a, b){
//         return a - b;
//     }

//     switch(op){
//         case"+": 
//         console.log(add(a, b));
//         break;
//         case"-": 
//         console.log(sub(a, b));
//         break;
//     }
// }

// maths(20, 30, "-");

//creating the function in the form of a variable

// let add = function (x, y) {
//     return x + y;
// }

// console.log(add(10, 5));

//higher order function (aka anonymoous function, because there's no name for it): 
//we have seen that we can pass variables in a functions, but here we can  also pass another function as a parameter

// function maths(xyz) {
//     // console.log(add);
//     // console.log(add(5, 10));     here, local add function is called since it's locally available, so it doesn't search for it globally.
//     console.log(xyz(5, 10));
// }

// maths(add);

// IIFE(pronounced as "e-fee") : Immediately Invoked Function Expression, these are used when a function is needed to be called automatically without calling it exclusively,

// syntax for IIFE : ("function to be invoked immediately")("parameter to be passed if needed")

// Example : 

// (function(){
//     console.log("Hello world");
// })()

// *see how to pass parameters in IIFE funcitons!*

// () => {} : can be used also in iife
//function keyword is also used as seen in the above example.

// the following way is also used when a parameter is needed to be passed

// (function myLife(){
//     num++;
//     console.log(num);
//     return num !== 5 ? myLife(num) : console.log("completed!");
// })(num = 0)

// use cases for IIFEs : - does not pollutes the global scope ot namespace
//example : 

// const x = "whateverrrr";

// const helloWorld = () => "Hello World!"

// // Isolate declarations within the function
// (() => {
//     const x = "whatever";
//     const helloWorld = () => "Hello world..."
//     console.log(x);
//     console.log(helloWorld());
// })()
// // in the abpve function the they're isolated from the global namespace but the can be used along side the global namepsace too. since they're isolated the original values are returned.
// console.log(x);
// console.log(helloWorld());

// const increment = (()=>{
//     let counter = 0;
//     console.log(counter);
//     const credits = num => console.log(`I have ${num} credits`);
//     return () => {counter++; credits(counter); }
// })()

// increment();
// increment();
// increment();
// increment();
// increment();
// console.log(counter); they cannot be accessed since they are not present in the global scope

// const Score =(() =>{
//     let count = 0;
//     return{
//         current: () => {return count},
//         increment: () => {count++},
//         reset: () => {count = 0}
//     }
// })();

// Score.increment();
// console.log(Score.current());
// Score.increment();
// console.log(Score.current());


// source: https://www.youtube.com/watch?v=8GDk8sj0YgQ