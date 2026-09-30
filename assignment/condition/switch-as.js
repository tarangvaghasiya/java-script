// let month = +prompt("enter month number");
// switch(month){
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("February")
//         break;
//     case 3:
//         console.log("March")
//         break;
//     case 4:
//         console.log("april")
//         break;
//     case 5:
//         console.log("may")
//         break;
//     case 6:
//         console.log("june")
//         break;
//     case 7:
//         console.log("july")
//         break;
//     case 8:
//         console.log("August")
//         break;
//     case 9:
//         console.log("September")
//         break;
//     case 10:
//         console.log("October")
//         break;
//     case 11:
//         console.log("November")
//         break;
//     case 12:
//         console.log("December")
//         break;
//     default:
//         console.log("enter valid month number")
    
// }

// let c = prompt("enter charecter");
// switch(true){
//     case c == "a":
//         console.log("vowel")
//         break;
//     case c == "e":
//         console.log("vowel")
//         break;
//     case c == "i":
//         console.log("vowel")
//         break;
//     case c == "o":
//         console.log("vowel")
//         break;
//     case c == "u":
//         console.log("vowel")
//         break;
//     case c == "A":
//         console.log("vowel")
//         break;
//     case c == "E":
//         console.log("vowel")
//         break;
//     case c == "I":
//         console.log("vowel")
//         break;
//     case c == "O":
//         console.log("vowel")
//         break;
//     case c == "U":
//         console.log("vowel")
//         break;
//     default:
//         console.log("consonant")
// }

// let marks = Number(prompt("Enter your marks:"));

// switch (true) {
//     case marks >= 75:
//         console.log("Distinction");
//         break;

//     case marks >= 60:
//         console.log("1st Class");
//         break;

//     case marks >= 50:
//         console.log("2nd Class");
//         break;

//     case marks >= 35:
//         console.log("3rd Class");
//         break;

//     default:
//         console.log("Failed");
// }

// let role = prompt("enter role:-")
// switch(true){
//     case role == "admin":
//         console.log("you can creat,edit,delete")
//         break;
//     case role == "user":
//         console.log("Limited Access")
//         break;
//     default:
//         console.log("enter valid role")
// }

// let fruit = "mango";

// switch (fruit) {
//   case "apple":
//     console.log("Apple is red");
//   case "mango":
//     console.log("Mango is yellow");
//   case "banana":
//     console.log("Banana is yellow");
//   default:
//     console.log("Unknown fruit");
// }

// output:
// Mango is yellow
// Banana is yellow
// Unknown fruit

// let value = 0;

// switch (value) {
//     case 0:
//         console.log("It is number 0");
//         break;

//     case "0":
//         console.log("It is string 0");
//         break;

//     case false:
//         console.log("It is false");
//         break;

//     case null:
//         console.log("It is null");
//         break;

//     case undefined:
//         console.log("It is undefined");
//         break;

//     default:
//         console.log("Unknown value");
// }

// let a = +prompt("enter first number:-")
// let b = +prompt("enter second number:-")
// console.log("1->+,2->-,3->*,4->/,5->%,6->**")
// let op = +prompt("enter oprecation number:-")
// switch(op){
//   case 1:
//     console.log(a,"+",b,"=",a+b)
//     break;
//   case 2:
//     console.log(a,"-",b,"=",a-b)
//     break;
//   case 3:
//     console.log(a,"x",b,"=",a*b)
//     break;
//   case 4:
//     console.log(a,"/",b,"=",a/b)
//     break;
//   case 5:
//     console.log(a,"%",b,"=",a%b)
//     break;
//   case 6:
//     console.log(a,"^",b,"=",a**b)
//     break;
//   default:
//     console.log("enter valid oprecation")
// }

// let day = Number(prompt("Enter day number:"));

// switch (true) {
//     case day >= 1 && day <= 10:
//         console.log("Beginning of the month");
//         break;

//     case day >= 11 && day <= 20:
//         console.log("Middle of the month");
//         break;

//     case day >= 21 && day <= 31:
//         console.log("End of the month");
//         break;

//     default:
//         console.log("Invalid day");
// }

// let category = prompt("Enter category (veg/nonveg):");
// let size = prompt("Enter size (half/full):");

// switch (category) {

//     case "veg":

//         switch (size) {
//             case "half":
//                 console.log("Category: Veg");
//                 console.log("Size: Half");
//                 console.log("Price: ₹100");
//                 break;

//             case "full":
//                 console.log("Category: Veg");
//                 console.log("Size: Full");
//                 console.log("Price: ₹180");
//                 break;

//             default:
//                 console.log("Invalid size");
//         }
//         break;

//     case "nonveg":

//         switch (size) {
//             case "half":
//                 console.log("Category: Non-Veg");
//                 console.log("Size: Half");
//                 console.log("Price: ₹150");
//                 break;

//             case "full":
//                 console.log("Category: Non-Veg");
//                 console.log("Size: Full");
//                 console.log("Price: ₹250");
//                 break;

//             default:
//                 console.log("Invalid size");
//         }
//         break;

//     default:
//         console.log("Invalid category");
// }