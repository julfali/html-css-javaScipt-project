//!setTimeout()

//*setTimeout is a function used to execute a specified function or piece of code once after a specified delay (in milliseconds).

//*It takes two parameters: a function or code to execute and the delay in milliseconds.

//*Syntax:
/*setTimeout(() => {
    code to be executed
}, timeduration);*/

//*Example:
// setTimeout(()=>{
//    console.log("setTimeout:Please father call your friend")
// },3000)

//!clearTimeout()
//*clearTimeout is a function used to cancel a timeout set with setTimeout before the specified function is executed.

//*It takes one parameter: the identifier of the timeout you want to cancel, which is returned by setTimeout.
let time1 = setTimeout(()=>{
   console.log("setTimeout:Please father call your friend")
},5000)

setTimeout(()=>{
   clearTimeout(time1)
   console.log("Cleared in 3s")
},3000)


//!setInterval()
//*setInterval is a function used to repeatedly execute a specified function or code at a specified interval (in milliseconds) until it is stopped.

//*It takes two parameters: a function or code to execute and the interval between executions in milliseconds.

//*Syntax:
/* const intervalId = setInterval(() => {
     code to be executed
 }, timeDuration);*/

//*Example
// setInterval(()=>{
//     console.log("setInterval:Please father call your friend")
// },3000)

//!clearInterval()
//*clearInterval is a function used to stop the interval execution set by setInterval.

//*It takes one parameter: the identifier of the interval you want to stop, which is returned by setInterval.

let count=0
let time = setInterval(()=>{
    console.log("I love you");
    count++;
    if(count==5){
        clearInterval(time);
        console.log("Executed 5 Times")
    }
},2000)
