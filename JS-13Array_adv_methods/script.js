// Higher Order Function (HOF): a function that takes another function as parameter is called an hof.

// *map* is an higher order function, it's somewhat like a loop.
//CALL BACK FUNCTION
//map doesn't mutate the array
//map returns an array.
let arr = [1, 2, 3, 4, 5];

// arr.map((value, idx, ogarr)=>{
//     console.log(value,idx,ogarr);
// })
// let newarr = arr.map((value)=>{
//     return value**2;
// })

// console.log(newarr)
// arr.map(function(){})

// let newarr = arr.map((value)=>{
// if(value % 2 == 0){
//     return value * 2;
// }
// })
// console.log(newarr);
//map returns an array of same size


// **filter{similar to map; kinda like loop; can take 3 parameter as well; doesn't mutates original array; returns new array}
// in filter you have to return a boolean value.
// it filters out values based on the given condition and returns the value/data which satisfy it. if no value satisfies it then it returns an empty array.
// implicit return
// let even = arr.filter((value)=>{
//     return value % 2 == 0;
// })

// console.log(even);
// let even = arr.filter(data => data % 2 !== 0)        alternative clean syntax
// console.log(even);

// filter returns an array based on values that satifies the condition.

// *Foreach* {3 parameters}
// arr.forEach((val, idx, ogArr) => {
//     console.log(val, idx, ogArr);
// })
// let newArr = arr.forEach((val, idx, ogArr) => {
//     return val;
// })
// console.log(newArr);
// in the above example the value 'undefined' was returned because the no other value assigned to newArr. So, it returned the default value 'undefined'
// let demo = document.getElementById("demo");
// arr.forEach((val, idx, ogarr) => {
//     demo.innerHTML += `<h2>Value : ${val} Index : ${idx} Array : ${ogarr}</h2>`
// })
// it is used when the data is needed without manipulationg the array