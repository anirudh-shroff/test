//methods of array : 

// let arr = [10, 20, 30]
// console.log(arr.length);

// length is property not a method.

// let arr = [2, 3, 5, 7, 8, 9];
// arr.push([40, 50, 60]);
// console.log(arr)

// push : to insert value at the end of array
// console.log(Array.isArray(arr))
// Array.isArray : is used to check if it's an array or not
// it can used in loops as well : 

// for(let i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){
//         for(let i =0; i < arr.length; i++){
//             for (let j = 0; j < arr[i].length; j++){
//                 console.log(arr[i][j]);
//             }
//         }
//     } else {
//                 console.log(arr[i]);
//     }
// }

// let val = arr.pop()
// console.log(arr);
// console.log(val); to see which value was removed
// it removes a value at the end from the array. 
// arr.shift(); it removes first element from the array
// arr.unshift(10); it adds a value in the zeroth index of the array
// arr.splice(1, 1, 30); to remove value/s from array from any position and can be replaced with another value if needed. (see more about it)
// arr.splice(1,1,"apple", 1.01) can also remove and imput multiple values. it modifies original array
// arr.slice(1,3);
// console.log(arr); like it's said above slice doesn't mutate an  array, it returns another array with values on indexes mentioned.
// console.log(arr.slice(1,3));
// console.log(arr);

// string functions : methods for string.

// let str = "anirudh is a developer";

// console.log(str.charCodeAt(0));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.split("")); returns characters in the form of an array without changing the original string.
//
// let newArr = str.split(" ");
// console.log(newArr)

// for palindrome : 
// let str = "nayan";

// if(str.split("").reverse().join("") === str){
//     console.log("palidrome")
// } else {
//     console.log("it's not a palindrome")
// }