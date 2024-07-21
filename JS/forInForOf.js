let str = "TOMMORROW IS CSS MOCK JUST ASSUME GUYS"

let arr = ["KKR",'SRH',"RR"]

let obj={
    name:"Virat Kohli",
    age:37,
    hasAttitude:true
}

//!for-in 

//*Strings
for(let val in str){
    console.log(val) //Returns the index value of a string from starting character to ending character
}

//*Arrays
for(let val in arr){
    console.log(val) //0 1 2
}

//*Objects
for(let val in obj){
    console.log(val) //name age hasAttitude
}

//!for-of

//*Strings
for(let val of str){
    console.log(val) //Each character of the string
}

//*Arrays
for(let val of arr){
    console.log(val) //KKR SRH RR
}

//*Objects
for(let val of obj){
    console.log(val) //Uncaught TypeError: obj is not iterable
}