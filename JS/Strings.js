//!Strings
// let a = "Rahul"
// let b = 'Sir'
// let c = '10'
// let d = `NOW`
// console.log(d)  //NOW
// console.log(typeof d) //string

//!String Literals
// let val1 = "JAVASCRIPT"
// console.log(val1) //JAVASCRIPT
// console.log(typeof val1)//string

//!String Constructor Object
// let val2 = new String("JAVASCRIPT")
// console.log(val2) //JAVASCRIPT
// console.log(typeof val2) //object

// console.log(val1==val2) //true
// console.log(val1===val2) //false

//!String Interpolation / Template Strings / String Templates
// let firstName = "Virat"
// let lastName = "Kohli"
// console.log("My fullname is "+firstName+" "+lastName)
// console.log('My fullname is ${firstName} ${lastName} and My age is ${30+5}')

// ! Accessing the characters of a string
// let str = "Hope you enjoyed sunday?"
// console.log(str[0]) //H
// console.log(str[10]) //n
// console.log(str[100]) //undefined
// console.log(str[-1]) //undefined

//!length
// let str = "Hope you enjoyed sunday?"
// console.log(str.length) //24
// console.log(str[str.length-2]) //y

//!String Methods

//*1)charAt()
// let str="WHY YOU ARE FEELING SLEEPY?"
// console.log(str.charAt(0)) //W
// console.log(str.charAt(7)) //" "(SPACE)
// console.log(str.charAt(10)) //E
// console.log(str.charAt(100)) //""(EMPTY STRING)
// console.log(str.charAt(-1)) //""(EMPTY STRING)

//*2)charCodeAt()
// let str="WHY YOU ARE FEELING SLEEPY?"
// console.log(str.charCodeAt(8)) //65
// console.log(str.charCodeAt(7)) //32
// console.log(str.charCodeAt(10)) //69
// console.log(str.charCodeAt(100)) //NaN
// console.log(str.charCodeAt(-1)) //NaN

//*3)toUpperCase()
// let str = "Hello Stupid Fellows"
// console.log(str.toUpperCase())

//*4)toLowerCase()
// let str = "Hello Stupid Fellows"
// console.log(str.toLowerCase())

//*5)repeat()
// let str = "abc"
// console.log(str.repeat()) //""
// console.log(str.repeat(3)) //abcabcabc
// console.log(str.repeat(0)) //""
// console.log(str.repeat(-1)) //Error
//*6)replace()
// let str = "Good Afternoon Again Good Afternoon"
// console.log(str.replace("Good","Food")) //Food Afternoon Again Good Afternoon
// console.log(str.replace("good","Food")) //Good Afternoon Again Good Afternoon (returns the same string)
//*7)replaceAll()
// let str = "Good Afternoon Everyone Once Again Good Afternoon"
// console.log(str.replaceAll("Afternoon","Evening")) //Food Afternoon Everyone Once Again Food Afternoon
// console.log(str.replaceAll("afternoon","Evening")) //Good Afternoon Everyone Once Again Good Afternoon (returns the same string)

//*8)concat()

// let str1 = "Html"
// let str2 = "Css"
// let str3 = "Js"
// console.log(str1.concat(str2)) //HtmlCss
// console.log(str1.concat(str2,str3)) //HtmlCssJs
// console.log(str1.concat(" ",str2," ",str3)) //Html Css Js

//*9)indexOf()
// let str = "Moye Moye"
// console.log(str.indexOf("o")) //1
// console.log(str.indexOf("o",2)) //6
// console.log(str.indexOf("z",2)) //-1
// console.log(str.indexOf("y",-7)) //2

//*10)lastIndexOf()
// let str = "hey ha Prabhu"
// console.log(str.lastIndexOf("h")) //11
// console.log(str.lastIndexOf("h",2)) //0
// console.log(str.lastIndexOf("z",0)) //-1
// console.log(str.lastIndexOf("y",-10)) //-1
// console.log(str.lastIndexOf("a",4)) //-1

//*11)slice()
// let str = "DONT TROUBLE THE TROUBLE"
// console.log(str.slice(0)) //DONT TROUBLE THE TROUBLE
// console.log(str.slice(0,5)) //DONT (After T space included)
// console.log(str.slice(5,12)) //TROUBLE
// console.log(str.slice(5,-1)) //TROUBLE THE TROUBL
// console.log(str.slice(-2,-4)) //""(Empty String)

//*12)substring()
// let str = 'ARAVAKKU AMMA THODU ADDANGA NARIKESTA'
// console.log(str.substring(0)) //ARAVAKKU AMMA THODU ADDANGA NARIKESTA
// console.log(str.substring(5,10)) //KKU A
// console.log(str.substring(-10,10))  //ARAVAKKU A
// console.log(str.substring(5,3)) //VA

//*13)split()
// let str = "ATLAU-NTADI-MANA-THONI"
// console.log(str.split("A")) //['', 'TL', 'U-NT', 'DI-M', 'N', '-THONI']
// console.log(str.split(" ")) //['ATLAU-NTADI-MANA-THONI']
// console.log(str.split("-")) //['ATLAU', 'NTADI', 'MANA', 'THONI']
// console.log(str.split("")) //['A', 'T', 'L', 'A', 'U', '-', 'N', 'T', 'A', 'D', 'I', '-', 'M', 'A', 'N', 'A', '-', 'T', 'H', 'O', 'N', 'I']

//*14) includes()
// let str = "Mokke Kada ani peekeste peeka kosta"
// console.log(str.includes("peeka")) //true
// console.log(str.includes("Peeka")) //false
// console.log(str.includes("a")) //true
// console.log(str.includes("z")) //false
// console.log(str.includes("Mokke",5)) //false

//*15)startsWith()
// let str = "NENU OKKA SARI COMMIT AYTE NA MATA NEENE VINANU"
// console.log(str.startsWith("N")) //true
// console.log(str.startsWith("R")) //false
// console.log(str.startsWith("NENU")) //true
// console.log(str.startsWith("NEN")) //true
// console.log(str.startsWith("OKKA",5)) //true


//*16)endsWith() 
// let str = "NENU OKKA SARI COMMIT AYTE NA MATA NEENE VINANU"
// console.log(str.endsWith("U")) //true
// console.log(str.endsWith("R")) //false
// console.log(str.endsWith("VINANU")) //true
// console.log(str.endsWith("ANU")) //true
// console.log(str.endsWith("O",6)) //true

//*17)trimStart(),trimEnd(),trim()
// let str = "      Hello      GOOD AFTERNOON                         "
// console.log(str.length) //56
// console.log(str.trimStart()) //Hello      GOOD AFTERNOON                         
// console.log(str.trimEnd()) //      Hello      GOOD AFTERNOON
// console.log(str.trim()) //Hello      GOOD AFTERNOON