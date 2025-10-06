// function outer() {
//     let x = 10;

//     return function () {
//         console.log("Helloooo");
//     }
// }

// const inner = outer();   
                            // Here, the function returned in outer function is catched by const inner, so it becomes a function. and upon calling it returns the value Helloooo
// inner();

// function outer(){
//     let x  = 10;

//     return function(){
//         console.log(x)
//     }
// }
// const inner = outer();

// // inner()
// outer()

//*closure is created when a function returns function and innner function comes with its lexical environment and can use the variables of outer function....*

//check the topic lexical scope, definition of closure
// method currying, method chaining will be there in array too, also see that


//syntax for arrow function :
// () => {}

// they were introduced in ES6, higher order functions, first class functions(variables as a function) were also introduced in ES6

// const hello = () => {
//     return 20;
// }

// the above can be written in shorter version as well which is more cleaner : 
// const hello = () => 20;
// here we dont need to write 'return' explicitely so we can remove it
// console.log(hello())

// const oddOrEven = (n) => n % 2 ==0 ? "even" : "odd";

// console.log(oddOrEven(40));
//above is an example using ternary operator.

// const oddOrEven = n => n % 2 ==0 ? "even" : "odd";
//can also be used this way, but only if this is written in one line, if there's more than one line, or variables than you'll need to use curly brackets.

// $(document).ready(() => {})
    // this syntax can be used as well