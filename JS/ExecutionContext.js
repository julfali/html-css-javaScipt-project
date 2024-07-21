// !EXAMPLE1
// console.log("Start")
// let a = 10;
// var b = 20;
// const c = 30;
// function display(){
    //     console.log(a)
    //     console.log(b)
//     console.log(c)
// }
// display()

// !EXAMPLE2
// console.log("HELLO....")
// function a(){
//     b();
//     console.log("INSIDE A")
// }
// function b(){
//     c();
//     console.log("INSIDE B")
// }
// function c(){
//     console.log("INSIDE C")
// }
// a()

//!Example 3
// console.log("START")
// let a = ()=>{
//     console.log("A function Executed")
// }
// function b(){
//     var a =10;
//     const b = 20;
//     console.log(a+b);
//     console.log("B Function Executed")
// }
// b();
// a();

//!Example 4
console.log("Good Afternoon")
function outer(){
    let a = 10;
    var b = 20;
    function inner(){
        let c = 30;
        console.log(a+c)
    }
    inner()
}
outer()