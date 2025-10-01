// js already a garbage collector so it's  a little slow, is based on c++

//  Arithematic operators +, -, /, *, %(modulo), ++(unary), --, **(exponential operator), +=, -=, /=, *=  
// ** was known as chain of operators in c++.
// 
// 
// 
// 
// 
// 
// let a = 2;
// console.log(++a) - will  add 1 the previos  value then display the result
// let b = 10;
// console.log(a**b); - this will show the result of 2 ^ 10 (i.e. 2*2*2*2*2)
 
// comparison operators
// >, <, ==, !==, <=, >=, ===, !==

// overloaded operator
// + also works as concatinate, i.e. it can connect strings too.
// + + will convert a number in string format into an integer format if the + is written in front of the string
// console.log(10 + +"5")
// console.log(10 + +"hello") while this will return a NaN value. (not a number) since hello is a string but not a number so it can't translate.

// - is also an overloaded operator if a  nnumeric value is written in string format it will detect and translate it into integer format to carry out operation. Also return NaN value if there is string

// logical operators
// &&   -   both the values should be true to get true, if even one value is false then it will return false

// console.log(0 && 5) here the value returns as 0 because ONLY 0 is a false value.
// console.log(2 && 5) here it returns 5 because both values are considered true, so it satisfies the operation and returned the value at the end i.e. 5

let a = 5;
let b = 10;
// console.log(a==b);       false value
// console.log(a=="5");     returns true because loose checking is there
// console.log(a==="5");    returns false because a strict checking is performed here, === iis used to make sure the checking is more thorough

// console.log(a!=b);
// console.log(a!="5");
// console.log(a!=="5");

// similarly we have !== for strict checking

// ||
// !

// parseint/float :

// console.log(+"5.5");             here it will convert string into numeric value
// console.log(-"5.5");             here it will convert string into numeric value but in negative as it is minus
// console.log(parseInt("5.5"));    it will convert string into interger value, regarless of + or -
// console.log(parseFloat("5.5"));  it will convert string into float value, regardless of + or -

// toString :

// console.log(b.toString(16)); will convert a number from integer or float to string format. however, it can also return value in different formats for eg. binary, octal, hexadecimal
