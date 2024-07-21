let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let name = document.getElementById("name")
    let phone = document.getElementById("Phone")
    let password = document.getElementById("password")
    let cpassword = document.getElementById("cpassword")
    let finalName = name.value
    let finalPhone = phone.value
    let finalpassword = password.value
    let finalCpassword = cpassword.value
    //! Name Field Validation
    if(finalName.length<3 || finalName.length>10){
        alert("Enter a character for name between 3-10")
    }
    //! Password Field Validation
    if(finalpassword!=finalCpassword){
     alert("Please check the password")
    }
    //!Phone Field Validation
    let numVal = isNaN(finalPhone)
    if(numVal){
        alert("Please enter a valid number")
    }
})

let eye = document.getElementById("eye")
let password = document.getElementById("password")
let passwordVisible = false
eye.addEventListener("click",()=>{
    if(passwordVisible){
        password.type="password";
        passwordVisible=false;
    }else{
        password.type="text";
        passwordVisible=true;
    }
})
