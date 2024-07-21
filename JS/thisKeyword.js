let obj1={
    name:"Rahul",
    age:18,
    fun:function display(){
        console.log(this)   //!current Object
    }
}
obj1.fun()

















let obj2={
    name:"Rahul",
    age:18,
    fun:()=>{
        console.log(this) //!window object
    }
}
obj2.fun()