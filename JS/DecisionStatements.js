//! if
let person = false;
if(person){
    console.log("Requirements will be provided")
}

//! if-else
let husband = false;
if(husband){
    console.log("DONT ENTER INTO HOUSE")
}else{
    console.log("YOU CAN ENTER INSIDE")
}

//!else-if
// let amount =10;
// if(amount>300){
//     console.log("CHICKEN BIRIYANI")
// }else if(amount>200 && amount<300){
//     console.log("VEG PALAV")
// }else if(amount>100 && amount<200){
//     console.log("Curd Rice and Water Bottle")
// }else{
//     console.log("Noru mooskoni intiki velu")
// }

//!switch case

let female = 20;
switch(true){
   case (female>30):
    console.log("Already its too late for marriage")
    break;
   case (female>25 && female<30):
    console.log("Perfect age to get married");
    break;
  case (female>18 && female<25):
    console.log("Naku pelli vaddu nenu independent avalli");
    break;
 case (female>15 && female<18):
    console.log("Police complaint istanu yenduku ante adi child marriage")
    break;
  default:
    console.log("PLEASE LOOK AT MY FACE ONCE")
}