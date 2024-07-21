let p = new Promise((resolve,reject)=>{
    let meet = false;
    if(meet){
        resolve("Promise got resolved")
    }else{
        reject("Promise got rejected")
    }

})
p.then((val)=>{
   console.log(`${val} SO WE WENT TO MEHFIL AND ATE BIRIYANI`)
}).catch((err)=>{
   console.log(`${err} SO SORRY GUYS I WAS BUSY AT THAT MOMENT`)
})