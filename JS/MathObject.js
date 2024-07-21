// console.log(Math)

//!PI
// console.log(Math.PI)  //3.141592653589793

//!MAX()
// let max = Math.max(10,2,3,27,30,100)
// console.log(max) //100

//!MIN()
// let min = Math.min(10,2,3,27,30,100)
// console.log(min) //2

//!CEIL()
// console.log(Math.ceil(2.3)) //3
// console.log(Math.ceil(4.9)) //5
// console.log(Math.ceil(3.1)) //4
// console.log(Math.ceil(-2.1)) //-2
// console.log(Math.ceil(2.0001)) //3

//!FLOOR()
// console.log(Math.floor(2.3)) //2
// console.log(Math.floor(4.9)) //4
// console.log(Math.floor(3.1)) //3
// console.log(Math.floor(-2.1)) //-3

//!ROUND()
// console.log(Math.round(2.3)) //2
// console.log(Math.round(4.9)) //5
// console.log(Math.round(3.1)) //3
// console.log(Math.round(-2.1)) //-2

//!ABS()
// console.log(Math.abs(-5)) //5
// console.log(Math.abs(-5.3)) //5.3
// console.log(Math.abs(5)) //5
// console.log(Math.abs(5.3)) //5.3
// console.log(Math.abs(0)) //0
// console.log(Math.abs(-0)) //0

//!TRUNC()
// console.log(Math.trunc(5.3)) //5
// console.log(Math.trunc(-5.3)) //-5
// console.log(Math.trunc(5)) //5
// console.log(Math.trunc(-0)) //-0

//!SIGN()
// console.log(Math.sign(-5)) //-1
// console.log(Math.sign(5)) //1
// console.log(Math.sign(0)) //0
// console.log(Math.sign(-0)) //-0
// console.log(Math.sign(-5.3)) //-1

//!POW()
// console.log(Math.pow(2,3)) //8
// console.log(Math.pow(5,2)) //25
// console.log(Math.pow(5,10)) //9765625
// console.log(Math.pow(-5,2)) //25
// console.log(Math.pow(-5,-2)) //0.04

//!SQRT()
// console.log(Math.sqrt(4)) //2
// console.log(Math.sqrt(25)) //5
// console.log(Math.sqrt(20)) //4.47213595499958
// console.log(Math.sqrt(-10)) //NaN

//!CBRT()
// console.log(Math.cbrt(8)) //2
// console.log(Math.cbrt(125)) //5
// console.log(Math.cbrt(20)) //2.7144176165949063
// console.log(Math.cbrt(-10)) //-2.154434690031884

//!SIN(),COS() AND TAN()
let convertedToDegree = Math.PI/180
console.log(convertedToDegree) //*0.017453292519943295

// console.log(Math.sin(0*convertedToDegree))
// console.log(Math.sin(30*convertedToDegree))
console.log(Math.sin(45*convertedToDegree)) //*0.7071067811865475
// console.log(Math.sin(60*convertedToDegree))
// console.log(Math.sin(90*convertedToDegree))

// console.log(Math.cos(0*convertedToDegree))
console.log(Math.cos(30*convertedToDegree)) //*0.8660254037844387
// console.log(Math.cos(45*convertedToDegree))
// console.log(Math.cos(60*convertedToDegree))
// console.log(Math.round(Math.cos(90*convertedToDegree)))

// console.log(Math.tan(0*convertedToDegree))
console.log(Math.tan(30*convertedToDegree)) //*0.5773502691896257
// console.log(Math.tan(45*convertedToDegree))
// console.log(Math.tan(60*convertedToDegree))
// console.log(Math.tan(90*convertedToDegree))

//!RANDOM()
// console.log(Math.random())

//*Generating random number between the range 0-6
// console.log(Math.floor(Math.random()*6))
// console.log(Math.ceil(Math.random()*6))
// console.log(Math.round(Math.random()*6))

//*Generating random number between the range 100-200
// console.log(Math.trunc(Math.random()*100)+100)




