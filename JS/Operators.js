//!ARITHEMATIC OPERATORS

//*ADDITION
console.log(2+2)  //4
console.log(2+"2") //22
console.log(typeof (2+"2")) //string
console.log(2+"html") //2html
console.log(2+2+"html") //4html
console.log(2+2+"html"+2) //4html2
console.log(2+true) //3
console.log(2+false) //2
console.log(2+ +"2") //4
console.log(typeof +"2") //number

//*SUBTRACTION
// console.log(1-1)  //0
// console.log(1-"1")  //0
// console.log(typeof (1-"1")) //number
// console.log(1-true) //0
// console.log(1-false) //1
// console.log(1-"abc")  //NaN
// console.log("20"-"abc") //NaN
// console.log(typeof ("20"-"abc")) //number

//*MULTIPLICATION
// console.log(2*2);  //4         
// console.log(2*"2")  //4
// console.log(typeof (2*"2")) //number
// console.log(2*true); //2
// console.log(2*false); //0
// console.log(2*"Abc"); //NaN
// console.log(typeof (2*"Abc")); //number

//*DIVISION
// console.log(2/2); //1
// console.log(2/"2")  //1
// console.log(typeof (2/"2")) //number
// console.log(2/true) //2
// console.log(2/false)  //Infinity
// console.log(2/"Abc") //NaN

//*MODULUS
// console.log(2%2); //0
// console.log(2%"2") //0
// console.log(typeof (2/"2")) //number
// console.log(2%true) //0
// console.log(2%false) //NaN
// console.log(2%"Abc") //NaN


//!COMPARISION OPERATORS(>,<,>=,<=,==,===,!=)
// let p=1;
// let q=2;
// let r = "1";
// console.log(p>q);  //false
// console.log(p>r);  //false
// console.log(q>r)   //true
// console.log(p>=q) //false
// console.log(p>=r)  //true
// console.log(p<r) //false
// console.log(p<=r) //true
// console.log(q!=r) //true
// console.log(r!=p)  //false
// console.log(r==p) //true
// console.log(r==q)  //false
// console.log(r===p) //false


//!ASSIGNMENT OPERATOR(+=,-=,*=,/=,%=)
// let a = 10;
// let b = 20;
// let c = "30";
// //* +=
// console.log(a+=b) //30
// console.log(a+=c) //3030
// console.log(a+=true) //3030true
// console.log(a+=false) //3030truefalse

//* -=
// console.log(a-=b) //-10
// console.log(a-=c) //-40
// console.log(a-=true) //-41
// console.log(a-=false) //-41

//* *=
// console.log(a*=b) //200
// console.log(a*=c) //6000
// console.log(a*=true) //6000
// console.log(a*=false) //0
 
//* /=
// console.log(a/=b) 
// console.log(a/=c)
// console.log(a/=true)
// console.log(a/=false)

//* %=
// console.log(a%=b) //10
// console.log(a%=c) //10
// console.log(a%=true) //0
// console.log(a%=false) //NaN

//! LOGICAL OPERATOR (&&,||,!)
// let a =10;
// let b =30;
// let c ="10";
// let d =5;

// console.log(a>d && b>a && d<=a) //true
// console.log(a===c && c>a && b>=d) //false
// console.log(a==c && a===c) //false
// console.log(a<c || a<=d || a==c) //true
// console.log(!(a===c)) //true

//!TERNARY OPERATOR/CONDITIONAL OPERATOR

let amount = 340;
let output = amount>300? "Go to Movie":"Go and Eat Biriyani"
console.log(output)


