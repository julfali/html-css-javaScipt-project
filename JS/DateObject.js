let date = new Date()
console.log(date) //Wed May 22 2024 13:46:10 GMT+0530 (India Standard Time)

//!DATE METHODS
console.log(date.getDate()) //22
console.log(date.getMonth()) //4
console.log(date.getFullYear()) //2024
console.log(date.getDay()) //3
console.log(date.toDateString()) //Wed May 22 2024

date.setDate(30)
date.setMonth(3)
date.setFullYear(2000)

//!TIME METHODS
console.log(date.getHours()) //13
console.log(date.getMinutes()) //47
console.log(date.getSeconds()) //9
console.log(date.getMilliseconds()) //899
console.log(date.getTime()) //Returns the stored time value in milliseconds since midnight, January 1, 1970

date.setHours(14)
date.setMinutes(90)
date.setSeconds(40)
date.setMilliseconds(899)
console.log(date.getMilliseconds())
console.log(date)


