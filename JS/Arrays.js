// let name = "Rahul"
// let age = 18
// let isEmployee = true

//!ARRAY LITERAL WAY
// let details = ["Rahul",18,true]
// console.log(details) //['Rahul', 18, true]
// console.log(typeof details) //object

//!ARRAY CONSTRUCTOR OBJECT
// let demo1 = new Array("Hello",20,false)
// console.log(demo1) //['Hello', 20, false]

// let demo2 = new Array(5)
// demo2[0]="html"
// demo2[1]="css"
// demo2[2]="js"
// demo2[3]="react js"
// demo2[4]="angular"
// demo2[5]="Bootstrap"
// console.log(demo2) //['html', 'css', 'js', 'react js', 'angular', 'Bootstrap']

//!ACCESSING ARRAY ELEMENTS (INDEXING AND LENGTH)
// let arr = ["Something","Anything","Nothing","Everything"]
// console.log(arr) //['Something', 'Anything', 'Nothing', 'Everything']
// console.log(arr[0]) //Something
// console.log(arr[3]) //Everything
// console.log(arr[7]) //undefined
// console.log(arr[-1]) //undefined
// console.log(arr.length) //4
// console.log(arr[arr.length-1]) //Everything

//!MULTI-DIMENSIONAL ARRAY (NESTED ARRAY)
// let arr = [
//     ["TILLU",30,2,"DJ PLAYER"],
//     ["RADHIKA",26,4,"SINGER"],
//     ["LILY",25,2,"COP"]
// ]
// console.log(arr) //[Array(4), Array(4), Array(4)]  (ENTIRE ARRAY)
// console.log(arr[0][3]) //DJ PLAYER


//!METHODS TO ADD OR DELETE THE ELEMENTS EITHER STARTING OR ENDING OF AN ARRAY

//*1)push():adds the element at the ending of the array

// let arr = ["kkr","rr","srh"]
// console.log(arr) //['kkr', 'rr', 'srh']
// arr.push("csk","dc","lsg")
// console.log(arr) //['kkr', 'rr', 'srh', 'csk', 'dc', 'lsg']

//*2)pop():Removes the last elements from an array
// arr.pop()
// console.log(arr) //['kkr', 'rr', 'srh', 'csk', 'dc']

//*3)unshift():Adds the element at the beginning of the array
// let arr = ["BRS","BJP","CONGRESS"]
// console.log(arr)  //['BRS', 'BJP', 'CONGRESS']
// arr.unshift("SPIDERS","JS") 
// console.log(arr)  // ['SPIDERS', 'JS', 'BRS', 'BJP', 'CONGRESS']

//*4)shift():Remove the element from the beginning of the array

// arr.shift()
// console.log(arr)  //['JS', 'BRS', 'BJP', 'CONGRESS']
// arr.shift()
// console.log(arr) //['BRS', 'BJP', 'CONGRESS']

//!ARRAY METHODS

//*1)toString()
// let arr = ["There","Was","Nothing","Outside","Simply","I","Went"]
// console.log(arr) //['There', 'Was', 'Nothing', 'Outside', 'Simply', 'I', 'Went']
// let converted = arr.toString()
// console.log(converted) //There,Was,Nothing,Outside,Simply,I,Went
// console.log(typeof converted) //string

//*2)concat()
// let arr1 = ["Actually","I","Went"]
// let arr2 = ["to","Attend","Meeting"]
// let arr3 = ["But","I","Dint","Understand","Anything"]

// let newArray = arr1.concat(arr2,arr3)
// console.log(newArray) //['Actually', 'I', 'Went', 'to', 'Attend', 'Meeting', 'But', 'I', 'Dint', 'Understand', 'Anything']

// let newArray2 = arr1.concat("Out")
// console.log(newArray2) // ['Actually', 'I', 'Went', 'Out']

//*3)join()
// let arr = ["a","b","c"]
// console.log(arr) //['a', 'b', 'c']
// console.log(arr.join("*")) //a*b*c
// console.log(arr.join(" ")) //a b c
// console.log(arr.join("💖")) //a💖b💖c

//*4)at()
// let arr = ["HTML","CSS","JS","REACT"]
// console.log(arr) 
// console.log(arr.at(0)) //HTML
// console.log(arr.at(2)) //JS
// console.log(arr.at(10)) //undefined
// console.log(arr.at(-1)) //REACT

//*5)flat()
// let arr = [1,2,3,4,5,[6,[7,[8,[9,[10]]]]]]
// console.log(arr) //[1, 2, 3, 4, 5, Array(2)]
// console.log(arr.flat(2)) // [1, 2, 3, 4, 5, 6, 7, Array(2)]
// console.log(arr.flat(Infinity)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//*6)delete
// let arr = ["HTML","CSS","JS","REACT"]
// console.log(arr) //['HTML', 'CSS', 'JS', 'REACT']
// delete arr[2]
// console.log(arr) //['HTML', 'CSS', empty, 'REACT']
// console.log(arr[2]) //undefined

//*7)isArray()
// let arr = ["Puri","Dosa","Vada","Uthapa","Chapathi"]
// let arr2 = new Array("Chicken Biriyani","Ragi Mudde","Natu Kodi")
// let arr3 = [
//     [1,2,3,4,5]
// ]
// let arr4 = "[1,2,3,4,5]"
// console.log(Array.isArray(arr)) //true
// console.log(Array.isArray(arr2)) //true
// console.log(Array.isArray(arr3)) //true
// console.log(Array.isArray(arr4)) //false

//*8)reverse()
// let arr = ["Vote","Sleep","Eat","Drink"]
// console.log(arr.reverse()) //['Drink', 'Eat', 'Sleep', 'Vote']

//*9)sort()
// let arr = [30,10,20,45,70,100]
// let arr2 = [10,20,true,"Rahul",1]
// console.log(arr.sort()) //[10, 100, 20, 30, 45, 70]
// console.log(arr2.sort()) //[1, 10, 20, 'Rahul', true]

//*10)slice()
// let arr = ["Rahul","Monty","Asnan","Abbas","Hari Prashanth","Shankar"]
// console.log(arr) // ["Rahul","Monty","Asnan","Abbas","Hari Prashanth","Shankar"]
// console.log(arr.length) //6
// console.log(arr.slice(0)) //['Rahul', 'Monty', 'Asnan', 'Abbas', 'Hari Prashanth', 'Shankar']
// console.log(arr.slice(3,8)) //['Abbas', 'Hari Prashanth', 'Shankar']
// console.log(arr.slice(0,-4)) //['Rahul', 'Monty']
// console.log(arr.slice(5,0)) //[]
// console.log(arr.slice(-2,0)) //[]
// console.log(arr.slice(1,1)) //[]
// console.log(arr) // ["Rahul","Monty","Asnan","Abbas","Hari Prashanth","Shankar"]

//*11)splice()
// let arr = ["Pani Puri","Samosa","Cutlet","Pav Bhaji","Dahi Puri"]
// console.log(arr) // ["Pani Puri","Samosa","Cutlet","Pav Bhaji","Dahi Puri"]
// console.log(arr.length) //5

// console.log(arr.splice(1,1,"Bhel Puri")) //['Samosa']
// console.log(arr) //['Pani Puri', 'Bhel Puri', 'Cutlet', 'Pav Bhaji', 'Dahi Puri']

// console.log(arr.splice(1,1,"Bhel Puri","Sev Puri")) //['Samosa']
// console.log(arr) //['Pani Puri', 'Bhel Puri', 'Sev Puri', 'Cutlet', 'Pav Bhaji', 'Dahi Puri']

// console.log(arr.splice(3,0,"Kachori")) //[]
// console.log(arr) //['Pani Puri', 'Sev Puri', 'Cutlet',  'Kachori','Pav Bhaji', 'Dahi Puri']

// console.log(arr.splice(-2,3,"Gulab Jamun")) //['Pav Bhaji', 'Dahi Puri']
// console.log(arr) //['Pani Puri', 'Samosa', 'Cutlet', 'Gulab Jamun']
//*12)includes()
// let arr = ["Water","King Fisher","Red Label","Budweiser","Old Monk","Antiquity"]
// console.log(arr.includes("Old Monk")) //true
// console.log(arr.includes("Teachers")) //false
// console.log(arr.includes("King Fisher",2)) //false
// console.log(arr.includes("King Fisher",-5)) //true
// console.log(arr.includes("King Fisher",-1)) //false

//*13)indexOf()
// let arr = ["Chicken Pakoda","Fish Fry","Potato Chips","Peanut Masala"]
// console.log(arr.indexOf("Fish Fry")) //1
// console.log(arr.indexOf("Moong Dal")) //-1
// console.log(arr.indexOf("Fish Fry",0)) //1
// console.log(arr.indexOf("Fish Fry",2)) //-1
// console.log(arr.indexOf("Fish Fry",-1)) //-1
// console.log(arr.indexOf("Fish Fry",-3)) //1

//*13)lastIndexOf()
// let arr = ["Chicken Pakoda","Fish Fry","Potato Chips","Peanut Masala"]
// console.log(arr.lastIndexOf("Fish Fry")) //1
// console.log(arr.lastIndexOf("Moong Dal")) //-1
// console.log(arr.lastIndexOf("Fish Fry",0)) //-1
// console.log(arr.lastIndexOf("Fish Fry",2)) //1
// console.log(arr.lastIndexOf("Fish Fry",-1)) //1
// console.log(arr.lastIndexOf("Fish Fry",-3)) //1

//!ARRAY HIGHER ORDER METHODS

//*1)forEach()
//*It is a higher order method which is used to itterate upon the array elements and perform a specfic operation
//*It takes a callback function as its argument and which in turn takes 3 values i.e element,index and array
// let arr1 = ["Telangana","AP","Karnataka","Maharastra"] 
// arr1.forEach(
//     (element,index,array)=> console.log(element,index,array)
// )

//*FOR-EACH METHOD CANNOT RETURN THE VALUES IT RETURNS UNDEFINED
// let arr1 = ["Telangana","AP","Karnataka","Maharastra"]
// let output = arr1.forEach(
//     (element,index,array) => element
// )
// console.log(output)

//*MULTIPLYING EACH ELEMENT OF ARRAY BY 2
// let arr2 = [10,20,30,40,50]
// arr2.forEach(
//     (ele)=>console.log(ele*2)
// )

//*EXTRACTING DATA FROM NESTED ARRAY
// let arr3 = [
//     ["TILLU",30,2,"DJ PLAYER"],
//     ["RADHIKA",26,4,"SINGER"],
//     ["LILY",25,2,"COP"]
// ]

// arr3.forEach(
//     (element)=>console.log(element[0])
// )

//*2)map()
//*It is a higher order method which is used to itterate upon the array elements and perform a specfic operation
//*It takes a callback function as its argument and which in turn takes 3 values i.e element,index and array
//*It return an array
// let arr = ["Happy","Birthday","HariPrashanth","Sir"]
// arr.map(
//     (element,index,array)=>{
//       console.log(element,index,array)
//     }
// )

//*MAP METHOD RETURNS THE ARRAY OF VALUES
// let arr = ["Dilsukhnagar","Kphb","Jntu","Panjagutta"]
// let branches = arr.map(
//     jspiders => jspiders
// )
// console.log(branches)

//*MULTIPLYING EACH ELEMENT OF ARRAY BY 2
// let arr2 = [10,20,30,40,50]
// let val = arr2.map(
//     ele=>ele*2
// )
// console.log(val)

//*3)filter()
//*It is a higher order method which is used to itterate upon the array elements and perform a specfic operation
//*It is mainly used to filter out the values of an array
//*It takes a callback function as its argument and which in turn takes 3 values i.e element,index and array
//*It return an array with the values which only satsify the condition
// let arr = [30,100,20,56,32]
// arr.filter(
//     (ele,ind,array)=>{
//        console.log(ele>50) 
//     }
// )

// let newOutput = arr.filter(
//     (ele)=>ele>20
// )
// console.log(newOutput)

//*4)reduce()

// *using for loop
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let sum1 = 0;
// for(let i = 0;i<=arr.length-1;i++){
//     sum1 += arr[i]  //! sum1=sum1+arr[i]
// }
// console.log(`SUM USING FOR LOOP ${sum1}`)

// *using Reduce Method
// let newOutput = arr.reduce((storage,element,index,array)=>{
//   return storage+=element
// })
// console.log(newOutput)

//*5)some()
// let arr1 = [10,20,30,40,50]
// let output1 = arr1.some(
//     (element)=>{
//       return element>40
//     }
// )
// console.log(output1)

//*6)every()
// let arr2 = [10,20,30,40,50]
// let output2 = arr2.every(
//     (element)=>{
//       return element>40
//     }
// )
// console.log(output2)