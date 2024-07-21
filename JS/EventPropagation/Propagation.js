let outerDiv = document.getElementById("outer")
let innerDiv = document.getElementById("inner")

outerDiv.addEventListener("click",()=>{
    alert("OUTER DIV CLICKED")
},false)

innerDiv.addEventListener("click",(e)=>{
    alert("INNER DIV CLICKED")
    e.stopPropagation()
},false)