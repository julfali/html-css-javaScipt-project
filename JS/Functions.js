//!Function Declaration
// function display(){
//     console.log("🐯")
// }
// display()

//@BEHAVIOR OF FUNCTION

//*Function without parameter without return keyword
// function add() {
//     console.log(2 + 3)
// }
// add()

//*Function without parameter with return keyword
// function print(){
//     return "RAHUL"
// }
// let result = print()
// console.log(result)

//*Function with parameter without return keyword
// function add(a, b) {
//     console.log(a + b)
// }
// add(10, 20)

//*Function with parameter with return keyword
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(5, 3))

//!Missing argument
// function display(a,b){
//     console.log(a+b)
// }
// display(10)

//!Passing Extra arguments
// function what(a,b){
//     console.log(a*b)
// }
// what(10,20,30)

//!FUNCTION EXPRESSION

//!ANONYMOUS FUNCTION
// let a = function(){
//     console.log("I AM ANONYMOUS FUNCTION")
// }
// a()

//!ARROW FUNCTION
// let arrow = ()=>{
//     console.log("I AM ARROW FUNCTION")
// }
// arrow()

//*EXPLICIT RETURN ARROW FUNCTION
// let product1 = (a,b)=>{
//     return a*b;
// }
// console.log(product1(10,20))

//*IMPLICIT RETURN ARROW FUNCTION
// let product2 = (a,b)=> a*b;
// console.log(product2(10,20))

// let b = ()=>console.log("Haiiiiiiii")
// b()

//!BEHAVIOR OF ARROW FUNCTION

//*Single parameter
// let a = val => val
// console.log(a("Rahul"))

//*No parameter
// let c = _ =>console.log("ARE YOU GUYS FEELING SLEEPY?")
// c()

//!IIFE(Immediate Invoked Function Expression)

// (function(){
//     console.log("Helloooooo")
// })();


// (()=>{
//     console.log("Byeeeeeee")
// })();


// (function rahul(){
//     console.log("Happy Birthday to me")
// })();

//!HIGHER ORDER FUNCTIONS
let add = (a, b) => {
    return a + b;
}

let sub = (a, b) => {
    return a - b;
}

let common = (a, b, task) => {
    return task(a, b)
}
console.log(common(10, 20, add))
console.log(common(10, 20, sub))