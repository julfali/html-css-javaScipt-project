// console.dir(document)

//!ACCESSING THE ELEMENTS

//*DIRECT ACCESS
// console.log(document.all)
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)
// console.log(document.body)
// console.log(document.head)
// console.log(document.title)
// console.log(document.h1)
// console.log(document.button)
// console.log(document.p)

//*INDIRECT ACCESS

//!getElementById()
// let anchorTag = document.getElementById("dom")
// console.log(anchorTag)

// let button = document.getElementById("btn")
// console.dir(button)
// button.style.backgroundColor="royalblue"
// button.style.color="white"
// button.style.padding="8px 20px"

//!getElementsByClassName()
// let elements = document.getElementsByClassName("hello")
// console.dir(elements)

// for(let i=0;i<elements.length;i++){
// console.dir(elements[i])
//     elements[i].style.color="yellow";
//     elements[i].style.backgroundColor="green"
// }

// let convertedArray = Array.from(elements)
// convertedArray.forEach((element,index,array)=>{
//     element.style.color="red"
// })

//!getElementsByTagName()
// let images = document.getElementsByTagName("img")
// console.log(images)

// let convertedArray = Array.from(images)
// console.log(convertedArray)

// convertedArray.forEach((element)=>{
//     element.style.height="250px"
//     element.style.width="400px"
// })

//!getElementsByName()
// let output = document.getElementsByName("password")
// console.log(output)
// output.forEach((ele)=>{
//    ele.style.backgroundColor="yellow"
// })

//!querySelector()
//*ID
// let button = document.querySelector("#btn")
// console.dir(button)
// button.style.backgroundColor="royalblue"
// button.style.color="white"
// button.style.width="100%"
// button.style.height="30px"
//*CLASS
// let output = document.querySelector(".hello")
// console.log(output)
// output.style.backgroundColor="green"
// output.style.color="yellow"
// output.style.textAlign = "center"
//*TAG
// let image = document.querySelector("img")
// console.log(image)
// image.style.height="300px"
// image.style.width="400px"

//!querySelectorAll()
// *ID
// let button = document.querySelectorAll("#btn")
// console.log(button)
// button.forEach((element)=>{
//    element.style.backgroundColor="black"
// })
// *CLASS
// let output = document.querySelectorAll(".hello")
// console.log(output)
// output.forEach((element)=>{
//     element.style.color="red"
// })
//*TAG NAME
// let image = document.querySelectorAll("img")
// console.log(image)
// image.forEach((element)=>{
//    element.style.height="300px"
//    element.style.width="400px"
// })

//!write() and writeln()
// document.write("Hello There Good Afternoon")
// document.write("Hello There Good Afternoon")


// document.writeln("Hello There Good Afternoon")
// document.write("Hello There Good Afternoon")

// document.write("<h1>HEADING TAG</h1>")
// document.writeln("<h1>HEADING TAG</h1>")

// document.write("<div><h1>Hello</h1><p>arsedtyguijkp</p></div>")

//!ACCESSING THE TEXT CONTENT
// let h1 = document.getElementById("heading")
// console.log(h1)
// console.log(`INNERTEXT : ${h1.innerText}`)
// console.log(`INNERHTML: ${h1.innerHTML}`)
// console.log(`TEXTCONTENT: ${h1.textContent}`)

// let para = document.querySelector("p")
// console.log(para)
// console.log(`INNERTEXT : ${para.innerText}`)
// console.log(`INNERHTML: ${para.innerHTML}`)
// console.log(`TEXTCONTENT: ${para.textContent}`)

//!SETTING THE TEXT CONTENT
// let section = document.querySelector("section")
// console.log(section)

// section.innerText="<h1>Hello from InnerText</h1>" //CANNOT INCLUDE TAGS
// section.innerHTML="<h1>Hello from InnerHTML</h1>"
//section.textContent="<h1>HELLO FROM TEXTCONTENT</h1>" //CANNOT INCLUDE TAGS

// section.innerHTML=`
// <h1 style="background-color:yellow;color:green;text-align:center">HEADING</h1>
// <p style="background-color:black;color:white;padding:20px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, odio laboriosam. Pariatur, blanditiis repellat totam facere illo ad ab eum mollitia unde aliquid a quas eos suscipit, impedit quod laudantium non earum in optio sunt dicta! Ab optio eaque eos numquam architecto. Corporis neque maiores rerum libero perspiciatis sint ab?</p>
// <button style="background-color:royalblue;color:white;padding:10px 25px;width:100%;cursor:pointer">CLICK</button>
// `

// !ACCESSING THE ATTRIBUTES
// let h1 = document.getElementById("hello")
// console.log(h1)
// let output = h1.getAttribute("class")
// console.log(output)

// let output2 = h1.getAttributeNode("class")
// console.log(output2)

// let output3 = h1.attributes
// console.log(output3)

//!SETTING THE ATTRIBUTES
// let heading = document.querySelector("h1")
// console.log(heading)
// heading.setAttribute("id","head")
// heading.setAttribute("class","hello hai bye")
// heading.setAttribute("rahul","webTech")

//!removeAttribute

// function removingAttribute(){
//     heading.removeAttribute("rahul")
// }

//!className
// console.log(heading.className)

//!classList
// let heading = document.querySelector("h1")
// console.log(heading)

// function dealWithClassList() {
//     heading.classList.add("two", "three", "four")
    // heading.classList.remove("one")
    // heading.classList.toggle("one")

    // console.log( heading.classList.contains("one"))  //true
    // console.log( heading.classList.contains("five")) //false
    // console.log(heading.classList.item(2)) //three
    // console.log(heading.classList.item(10)) //null
    // console.log(heading.classList.length) //4

// }

//!createElement()
// let heading = document.createElement("h1")
// let paragraph = document.createElement("p")
// let btn = document.createElement("button")
// console.log(heading)
// console.log(paragraph)
// console.log(btn)

//!createComment()
// let comment = document.createComment("THIS IS A COMMENT THROUGH JS DOM")
// console.log(comment)

//!createTextNode()
// let h1Text = document.createTextNode("THIS IS HEADING")
// let pText = document.createTextNode("This is a Paragraph")
// let btnText = document.createTextNode("CLICK")
// console.log(h1Text)
// console.log(pText)
// console.log(btnText)

//!append()
// heading.append(h1Text,pText)
// paragraph.append(pText)
// btn.append(btnText)

//!appendChild()
// heading.appendChild(h1Text)
// paragraph.appendChild(pText)
// btn.appendChild(btnText)

// let body = document.querySelector("body")
// console.log(body)
// body.append(heading,paragraph,btn)

//!insertBefore()
// body.insertBefore(btn,heading)
// body.insertBefore(btn,paragraph)

// let scriptTag = document.getElementById("script")
// console.log(scriptTag)
// body.insertBefore(heading,scriptTag)
// body.insertBefore(paragraph,scriptTag)
// body.insertBefore(btn,scriptTag)

//!childNodes and children
// let body = document.body
// console.log(body.childNodes)
// console.log(body.children)

//!replaceChild()
let parentElement = document.querySelector("ul")
console.log(parentElement)

let ChildToBeReplaced = parentElement.children[2]
console.log(ChildToBeReplaced)

let duplicate = document.createElement("li")
duplicate.innerText="I am Duplicate of Content3"

function  operationKidnapping(){
    parentElement.replaceChild(duplicate,ChildToBeReplaced)
}

//!removeChild()
let fourthElement = parentElement.children[3]
function removingChild(){
    parentElement.removeChild(fourthElement)
}