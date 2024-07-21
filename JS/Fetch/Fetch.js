//!HANDLING PROMISE USING THEN()
// let output = fetch("https://fakestoreapi.com/products")
// output.then((result) => {
//     let finalOutput = result.json()
//     finalOutput.then((result) => {
//         console.log(result)
//     })
// })
//!SHORT FORM
// fetch("https://fakestoreapi.com/products")
// .then(result=> result.json())
// .then(result=>console.log(result))
//!HANDLING PROMISE USING ASYNC AND AWAIT

let fetchData = async ()=>{
    let output = await fetch("https://fakestoreapi.com/products")
    let finalOutput = await output.json()
     let container = document.getElementById("container")
     finalOutput.forEach((element)=>{
        container.innerHTML+=`
        <main id="item">
           <h1>${element.id}</h1>
           <h3 id="title">${element.title}</h3>
           <img src=${element.image}>
           <p id="description">${element.description.slice(0,100)}</p>
           <h5>${element.price}</h5>
           </main>
        `
     })
}
fetchData()