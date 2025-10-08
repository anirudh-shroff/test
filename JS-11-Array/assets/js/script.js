//*Array : a collection of multiple values of same datatype is an array, this the general defintion but it is not applicable to js exclusively
// in js, it is a collection of multiple values, but can be of different datatypes.

// let arr = [1, 2, 3, 4, 5];
//js already has garbage collectors so it doesn't need pointers or  delete keyword. it also makes it a little slower compared to c++
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log(arr)

//constructors, 1. default 2. parameterized constructor

// let  arr = new Array(5).fill(99);
// console.log(arr);
//it shows [<5 empty items>] because array created using Array constructor, and it doesn't have any values yet.
// arr[0] = 10;
//now it shows 4 empty items since we put 10 on zeroth index.
//note : if we need to specify size of array then use Array construtor for creating array, otherwise use [] if size is not defined
//let's say we want to put value on each index of above array then we can use fill method:
//as you can see it can put values in empty spaces mentioned in the (). similarly explore other methods of array. it can also used to create 2d array(although it not a valid way.)
// console.log(arr)

// creating multi-dimentional arrays :
//2d array : 
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

//3d array :
// let arr1 = [
//     [1,2,3],
//     [4,[10],6],
//     [7,8,9]
// ]
//can be showed using loops just like cpp, i for rows, j for columns : 
// for (let i = 0; i<arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }
// here .length is used to cover the entire length of array, as values(arrays) on each index may contain different lengths.