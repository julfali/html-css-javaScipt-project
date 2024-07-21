//!GLOBAL SCOPE
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a)
// console.log(b)
// console.log(c)

// function confuse() {
//     console.log("INSIDE FUNCTION")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// confuse()

// {
//     console.log("INSIDE BLOCK")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

//!LOCAL/FUNCTION SCOPE

// function absent(){
//     var a = "Rahul";
//     let b = "Karthik"
//     const c = "Nithin"
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// absent()

// console.log("OUTSIDE FUNCTION AND BLOCK")
// console.log(a)
// console.log(b)
// console.log(c)

// {
//     console.log("INSIDE BLOCK")
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

//!BLOCK SCOPE

{
    var a  = "Zoya"
    let b  = "Srileela"
    const c  = "Sai Pallavi"
    console.log("INSIDE BLOCK")
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log("OUTSIDE FUNCTION AND BLOCK")
console.log(a)
console.log(b)
console.log(c)

function present(){
    console.log("INSIDE FUNCTION")
    console.log(a)
    console.log(b)
    console.log(c)
}
present()