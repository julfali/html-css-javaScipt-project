//!WHY OBJECTS?
// let name = "Rahul";
// let age = 29
// let place = "Hyd"

// let details = ["Rahul",29,"Hyd","KPHB"]


// let data = {
//     name:"Rahul",
//     age:29,
//     place:"Hyd",
//     area:"KPHB"
// }

//!WAYS OF CREATING OBJECT

//*LITERAL WAY
// let bioData = {
//     name:"Karthik",
//     age:27,
//     dob:"28/05/1997",
//     job:"Doctor",
//     salary:200000,
//     exGirlFriend:true,
//     futureGoals:["Visting Bali","Earning 400000"],
//     healthIssues:null,
//     willingToMarry:()=>{
//         console.log("Eagerly Waiting")
//     }
// }
// console.log(bioData)

//*CONSTRUCTOR OBJECT
// let bioData2 = new Object()
// bioData2.name="Raj"
// bioData2.age=27
// bioData2.dob="28/05/1997"
// bioData2.job="Doctor"
// bioData2.salary=200000
// bioData2.exGirlFriend=true
// bioData2.futureGoals=["Visting Bali","Earning 400000"]
// bioData2.healthIssues=null
// bioData2.willingToMarry=()=>{
//     console.log("Eagerly Waiting")
// }
// console.log(bioData2)

//!ACCESSING THE PROPERTIES OF AN OBJECT
// let simple = {
//       name:"abc",
//       age:19,
//       isSingle:false,
//       fun:function hello(){
//         console.log("SPECIFY SOMETHING")
//       }
// }
// console.log(simple)

//!DOT NOTATION
// console.log(simple.name)
// console.log(simple.age)
// console.log(simple.isSingle)
// simple.fun()

//!BOX NOTATION
// console.log(simple["name"])
// console.log(simple["age"])
// console.log(simple["isSingle"])
// simple["fun()"]

//!Dealing with const keyword

//*ARRAYS
// const arr = ["TMR","IS","HTML","MOCK"]

//@MODIFYING INDIVIDUAL ELEMENTS IS POSSIBLE
// arr[2]="CSS"
// console.log(arr)

//@REASSIGNING NEW ARRAY IS NOT POSSIBLE
// arr = ["TMR","IS","CSS","MOCK"]
// console.log(arr)

//*OBJECT
// const obj = {
//     name:"wertyuiop",
//     age:20
// }

//@MODIFYING INDIVIDUAL PROPERTIES IS POSSIBLE
// obj.name="rahul"
// console.log(obj)

//@REASSIGNING NEW OBJECT IS NOT POSSIBLE
// obj={
//     place:"HYD"
// }
// console.log(obj)

//!OBJECT PROPERTIES AND METHODS
// let bioData = {
//     name:"Karthik",
//     age:27,
//     dob:"28/05/1997",
//     job:"Doctor",
//     salary:200000,
//     exGirlFriend:true,
//     futureGoals:["Visting Bali","Earning 400000"],
//     healthIssues:null,
//     willingToMarry:()=>{
//         console.log("Eagerly Waiting")
//     }
// }

// console.log(bioData)
//*1)delete
// delete bioData.dob
// console.log(bioData)

//*2)Object.keys()
// console.log(Object.keys(bioData))

//*3)Object.values()
// console.log(Object.values(bioData))

//*4)Object.entries()
// console.log(Object.entries(bioData))

//*5)Object.fromEntries()
// let nested = [
//     ["name","Rahul"],
//     ["place","Hyd"],
//     ["age",23]
// ]
// console.log(nested)
// console.log(Object.fromEntries(nested))

//*6)Object.assign()
//@Copying properties from one single object
// let obj = {}
// let newObject = Object.assign(obj,bioData)
// console.log(newObject)

//@Copying properties from multiple objects
// let obj = {
//     place:"Hyd",
//     name:"Rahul"
// }
// let newObj = Object.assign({},bioData,obj)
// console.log(newObj)

//@Converting Array to an Object
// let arr = ["Html","Css","Js"]
// let newObj = Object.assign({},arr)
// console.log(newObj)

//@Converting String to an Object
// let str = "Hello"
// let newObj = Object.assign({},str)
// console.log(newObj)

//*7)Object.seal()
let obj = {
    name:"Rahul",
    age:20
}
console.log(obj)

Object.seal(obj)

//@Addition of a property is not possible
obj.place="Hyd"
console.log(obj)

//@Modification of a property is possible
obj.age=30;
console.log(obj)

//@Deletion of a property is not possible
delete obj.name
console.log(obj)

//*8)Object.freeze()
// let obj = {
//     name:"Rahul",
//     age:20
// }
// console.log(obj)

// Object.freeze(obj)

//@Addition of a property is not possible
// obj.place="Hyd"
// console.log(obj)

//@Modification of a property is not possible
// obj.age=30;
// console.log(obj)

//@Deletion of a property is not possible
delete obj.name
console.log(obj)