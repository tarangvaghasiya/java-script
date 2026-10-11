// let temperatures = [28, 32, 25, 40, 18, 35];

// let count = 0;

// for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > 30) {
//         count++;
//     }
// }

// console.log(count);

// let num = 4729;
// let sum = 0;

// let str = String(num);

// for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
// }

// console.log(sum);

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0 && i % 7 != 0) {
//         console.log(i);
//     }
// }

// let str = "JavaScript";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (
//         str[i] != "a" &&
//         str[i] != "e" &&
//         str[i] != "i" &&
//         str[i] != "o" &&
//         str[i] != "u"
//     ) {
//         result += str[i];
//     }
// }

// console.log(result);

// let arr = [10, 25, 8, 40, 30];

// let largest = 0;
// let secondLargest = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     }
//     else if (arr[i] > secondLargest) {
//         secondLargest = arr[i];
//     }
// }

// console.log(secondLargest);

// let num = 28;
// let sum = 0;

// for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//         sum += i;
//     }
// }

// if (sum == num) {
//     console.log("Perfect Number");
// } else {
//     console.log("Not a Perfect Number");
// }

// let num = 1;

// for (let i = 1; i <= 8; i++) {
//     console.log(num);
//     num = num * 2;
// }

// let a = 0;
// let b = 1;

// for (let i = 1; i <= 20; i++) {
//     console.log(a);

//     let next = a + b;
//     a = b;
//     b = next;
// }

// let scores = [45, 78, 90, 32, 56, 88];

// let sum = 0;

// for (let i = 0; i < scores.length; i++) {
//     sum += scores[i];
// }

// let average = sum / scores.length;

// let count = 0;

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > average) {
//         count++;
//     }
// }

// console.log("Average:", average);
// console.log("Students above average:", count);

// let num = 13;
// let binary = "";                                         
//                                                           
// for (; num > 0; num = Math.floor(num / 2)) {
//     let remainder = num % 2;
//     binary = remainder + binary;
// }

// console.log(binary);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////with break///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr = [4, 9, 3, 7, 8, 7, 2];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] == 7) {
//         console.log("7 found at index:", i);
//         break;
//     }

// }

// let correctPassword = "1234";

// for (let i = 1; i <= 5; i++) {

//     let password = prompt("Enter password:");

//     if (password == correctPassword) {
//         console.log("Access granted");
//         break;
//     }

//     if (i == 5) {
//         console.log("Account locked");
//     }
// }

// let sum = 0;

// for (let i = 1; i <= 100; i++) {

//     sum = sum + i;

//     if (sum > 100) {
//         console.log("Last number added:", i);
//         break;
//     }

// }

// for (let i = 1; i <= 50; i++) {

//     console.log(i);

//     if (i > 20 && Math.sqrt(i) % 1 == 0) {
//         break;
//     }

// }

// for (let i = 1; i <= 50; i++) {

//     console.log(i);

//     if (i > 20 && Math.sqrt(i) % 1 == 0) {
//         break;
//     }

// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////Continue////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 1; i <= 30; i++) {
//     if (i % 4 == 0) {
//         continue;
//     }
//     console.log(i);
// }

// let numbers = [10, -5, 20, -8, 15, -3];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] < 0) {
//         continue;
//     }

//     sum = sum + numbers[i];
// }

// console.log("Sum of positive numbers:", sum);

// let text = "Hello World";

// for (let i = 0; i < text.length; i++) {

//     if (text[i] == " ") {
//         continue;
//     }

//     console.log(text[i]);
// }

// for (let i = 1; i <= 12; i++) {
//     let product = 6 * i;
//     if (product % 5 == 0) {
//         continue;
//     }
//     console.log("6 x " + i + " = " + product);
// }

// let ages = [12, 18, 25, 15, 30, 17, 22];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] < 18) {
//         continue;
//     }
//     console.log(ages[i]);
// }

 //////////////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////Reverse////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////

 //1


// for (i = 50; i>0;i--){
//     if(i%3==0 && i%9 != 0){
//         console.log(i)
//     }
// }

//2

// let arr = [12, 45, 7, 23, 56, 89, 34];

// let largest = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] < 50 && arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log(largest);

//3

// let num = 4729;
// let product = 1;
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     let digit = i % 10;
//     if (digit % 2 == 1) {
//         product = product * digit;
//     }
// }
// console.log(product);


//4

// let w = "programming"
// let r = ""

// for(let i = w.length-1 ; i>=0;i--){
//     r+=w[i]
// }
// console.log(r)

//5


//6

// let num = 121;
// let temp = num;
// let reverse = 0;

// for (; temp > 0; temp = Math.floor(temp / 10)) {
//     let digit = temp % 10;
//     reverse = reverse * 10 + digit;
// }

// if (num == reverse) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

//7

// let arr = [32, 28, 41, 19, 35, 27, 38];
// let co =0
// for(i = arr.length -1 ;i>=0;i--){
//     if(arr[i]>30){
//         co +=1
//     }
// }
// console.log(co,"time colder")

//8

//9

// let arr = [90, 85, 70, 95, 60, 88, 75];

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] > 80) {
//         console.log("Score:", arr[i]);
//         console.log("Index:", i);
//         break;
//     }
// }

//10

// for (let i = 40; i >= 1; i--) {
//     if (Number.isInteger(Math.sqrt(i))) {
//         continue;
//     }

//     console.log(i);
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////patern////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1

// num = 1

// for(i = 1;i<=4;i++){
//     bag = ""
//     for(j=1;j<=i;j++){
//         bag += num + " "
//         num += 1
//     }
//     console.log(bag)
// }

//2

// for(i = 1;i<=5;i++){
//     bag = ""
//     for(j=1;j<=i;j++){
//         bag += String.fromCharCode(64+j)+ " "
//     }
//     console.log(bag)
// }

//3

// for (let i = 1; i <= 5; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//         if (i === 5 || j === 1 || j === i) {
//             row += "* ";
//         } else {
//             row += "  ";
//         }
//     }

//     console.log(row);
// }

//4

// for (i=5;i>0;i--){
//     bag = ""
//     for (j=1;j<=i;j++){
//         bag += "*"
//     }
//     console.log(bag)
// }

//5


// for (i=5;i>0;i--){
//     bag = ""
//     for (j=1;j<=i;j++){
//         bag += i
//     }
//     console.log(bag)
// }

//6


// for (i=5;i>0;i--){
//     bag = ""
//     for (j=1;j<=i;j++){
//         bag += j
//     }
//     console.log(bag)
// }

//7

// num=15
// for (i=5;i>0;i--){
//     bag = ""
//     for (j=1;j<=i;j++){
//         bag += num + " "
//         num-=1
//     }
//     console.log(bag)
// }

//8


// for (i=5;i>0;i--){
//     bag = ""
//     for (j=1;j<=i;j++){
//         if(i===5 || j ===1 || i===j){
//             bag += "*"
//         }
//         else{
//             bag += " "
//         }
        
//     }
//     console.log(bag)
// }

//9

// for (let i = 1; i <= 5; i++) {
//     let row = "";

//     for (let j = 1; j <= 5; j++) {
//         if (i === j) {
//             row += "  ";
//         } else {
//             row += "* ";
//         }
//     }

//     console.log(row);
// }

//10

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 10; j++) {
//         let product = i * j;

//         if (product % 2 === 0) {
//             console.log(i + " x " + j + " = " + product);
//         }
//     }
//     console.log("----------");
// }

//11

// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j < n; j++) {
//         row += Math.abs(i - j) + " ";
//     }

//     console.log(row);
// }