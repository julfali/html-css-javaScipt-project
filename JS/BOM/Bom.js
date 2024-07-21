// console.log(this)
// console.log(window)

//!alert()
// function display1(){
//     alert("Danger....................👿")
// }

//!confirm()
// function display2(){
//     confirm("Are you still loving me?????")
// }

//!Combining alert() and confirm()
// function display3(){
//     let msg = confirm("Are you still loving me?????")
//     if(msg){
//         alert("Relationship Started👨‍👩‍👧‍👦")
//     }else{
//         alert("Breakup happened💔")
//     }
// }

//!prompt()
// function display4(){
//     let val = prompt("Enter your name")
//     console.log(val)
//     let num1 = prompt("Enter first Number")
//     let num2 = prompt("Enter second Number")
//     console.log(num1+num2)
// }

//*Converting String to a Number

//*1)Number()
// let val1 = Number(prompt("Enter First Number"))
// let val2 = Number(prompt("Enter Second Number"))
// console.log(val1+val2)

//*2)ParseInt()
// let val1 = parseInt(prompt("Enter First Number"))
// let val2 = parseInt(prompt("Enter Second Number"))
// console.log(val1+val2)

//*3)ParseFloat()
// let val1 = parseFloat(prompt("Enter First Number"))
// let val2 = parseFloat(prompt("Enter Second Number"))
// console.log(val1+val2)

//!open()
// let a;
// function display5() {
//    a = open("./Bom.html", "_blank", "height=300px,width=400px,top=200px,left=500px")
// }

//!close()
// function display6() {
//     a.close()
// }


//!innerHeight and OuterHeight
// console.log(`InnerHeight: ${innerHeight}`)
// console.log(`OuterHeight: ${outerHeight}`)

//!innerWidth and OuterWidth
// console.log(`InnerWidth: ${innerWidth}`)
// console.log(`OuterWidth: ${outerWidth}`)

//!Web storage systems

//!sessionStorage

// console.log(sessionStorage)

//*setItem()
// sessionStorage.setItem("name","Rahul")
// sessionStorage.setItem("age",20)

//*getItem()
// let age = sessionStorage.getItem("age")
// console.log(age)
// let name= sessionStorage.getItem("name")
// console.log(name)

//*removeItem()
// sessionStorage.removeItem("name")

//*clear()
// sessionStorage.clear()

//!localStorage

// console.log(localStorage)
//*setItem()
// localStorage.setItem("name","Tillu")
// localStorage.setItem("age",32)

//*getItem()
// let name = localStorage.getItem("name")
// console.log(name)
// let age = localStorage.getItem("age")
// console.log(age)

//*removeItem()
// localStorage.removeItem("age")

//*clear()
// localStorage.clear()

//!History
// console.log(history)
//*forward()
// function display7(){
//     history.forward()
// }
//*back()
// function display8(){
//   history.back()
// }
//*go() acting like forward()
// function display9(){
//     history.go(3)
// }
//*go() acting like backward()
// function display10(){
//     history.go(-2)
// }
//*length
// console.log(history.length)

//!Screen

//*height and availHeight
// console.log(`Height ${screen.height}`)
// console.log(`AvailHeight ${screen.availHeight}`)

//*width and availWidth
// console.log(`width ${screen.width}`)
// console.log(`Availwidth ${screen.availWidth}`)

//*colorDepth and pixelDepth
// console.log(`ColorDepth:${screen.colorDepth}`)
// console.log(`PixelDepth:${screen.pixelDepth}`)

//!Location
// console.log(location)
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.href)
// console.log(location.port)
// console.log(location.protocol)

// function display11(){
//     location.reload()
// }

// function display12(){
//     location.assign("https://www.w3schools.com/")
// }

// function display13(){
//     location.replace("https://www.flipkart.com/")
// }

// function display14(){
//     location.href="https://www.amazon.in/"
// }


//!Navigator
// console.log(navigator.appName)
// console.log(navigator.appCodeName)
// console.log(navigator.language)
// console.log(navigator.languages)
// console.log(navigator.cookieEnabled)
// console.log(navigator.onLine)

//*To know the location of the user
// navigator.geolocation.getCurrentPosition((pos)=>{
//   console.log(`Latitude : ${pos.coords.latitude}`)
//   console.log(`Longitude : ${pos.coords.longitude}`)
// })