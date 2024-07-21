//!SPREAD OPERATOR

//*ARRAYS
// let arr1  = ["Laptop","Shoes","Brush","Clothes"]
// let arr2 = ["Books","Perfume","Charger","Plate"]
// let arr3 = [...arr2,...arr1]
// console.log(arr3)


//*OBJECTS
// let obj1={
//     name:"Subash",
//     afraidOf:"Guna Caves"
// }
// let obj2 = {
//     strength:"Friends"
// }

// let obj3={
//     ...obj1,
//     ...obj2
// }

// console.log(obj3)

//!Array to an Object

// let arr =["Tuesday",20,true]
// let obj = {
//     ...arr
// }
// console.log(obj)

//!REST PARAMETER
// function normal(a,b,c,...rest){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(rest)
// }
// normal(10,20,30,40,50,60,70,80,90)

//!Accessing Arguments without specifying parameters
function display(){
   console.log(arguments) //Arguments(3) [true, 10, 30, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
display(true,10,30)