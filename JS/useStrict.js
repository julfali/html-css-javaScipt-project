//!Example1
// "use strict"
// a=10;
// console.log(a)  // Uncaught ReferenceError: a is not defined

//!Example2
// "use strict"
// function hello(){
    //     a=true;
    //     console.log(a)  //Uncaught ReferenceError: a is not defined
    // }
    // hello()
    
//!Example3
"use strict"
function display(a,b,b){
    console.log(a+b+b)   //Uncaught SyntaxError: Duplicate parameter name not allowed in this context
}
display(10,20,30)