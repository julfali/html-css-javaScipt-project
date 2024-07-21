//!CLICK
let heading = document.querySelector("h1")
heading.addEventListener("click",()=>{
    heading.style.color="red"
})

//!DBLCLICK
let button = document.querySelector("button")
button.addEventListener("dblclick",()=>{
    button.style.color="white";
    button.style.backgroundColor="royalblue"
    heading.style.color="green"
})

//!MOUSEENTER
// heading.addEventListener('mouseenter',()=>{
//     heading.style.color="yellow";
//     heading.style.backgroundColor="green";
//     heading.style.textAlign="center"
// })
//!MOUSELEAVE
// heading.addEventListener("mouseleave",()=>{
//     heading.style.background="black";
//     heading.style.color="red"
//     heading.style.textAlign="right"
// })

//!INPUT
// let input = document.querySelector("input")
// input.addEventListener("input",()=>{
//     input.style.background="yellow"
// })

//!CHANGE
// input.addEventListener("change",()=>{
//     input.style.background="red"
// })

//!KEYPRESS
let input = document.querySelector("input")
input.addEventListener("keypress",(whatever)=>{
    console.log(`KEY:${whatever.key}`)
    console.log(`CODE:${whatever.code}`)
    console.log(`KEYCODE:${whatever.keyCode}`)
})

//!KEYUP
// let input = document.querySelector("input")
input.addEventListener("keyup",(e)=>{
    console.log(e)
    console.log("NOW THE KEY IS UP")
})

//!KEYDOWN
input.addEventListener("keydown",()=>{
    console.log("NOW THE KEY IS DOWN")
})
