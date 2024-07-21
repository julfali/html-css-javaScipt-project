let body = document.body;
let h3 =document.querySelector("h3")
let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    let redValue = Math.round(Math.random()*255)
    let greenValue = Math.round(Math.random()*255)
    let blueValue = Math.round(Math.random()*255)
    let finalColor = `rgb(${redValue},${greenValue},${blueValue})`
    body.style.backgroundColor=finalColor
    h3.innerText=finalColor

})