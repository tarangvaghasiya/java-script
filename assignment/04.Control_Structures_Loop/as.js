
// // Part I - For Loop


//  // 1. Count temperatures above 30°C

// let temp = [28, 32, 25, 40, 18, 35];
// let count = 0;

// for (let i = 0; i < temp.length; i++) {
//     if (temp[i] > 30) {
//         count++;
//     }
// }

// console.log("1. Hot days:", count);


// // 2. Sum of all digits

// let num = 4729;
// let sum = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//     sum = sum + (num % 10);
// }

// console.log("2. Sum:", sum);


// // 3. Numbers divisible by 3 and 5 but not by 7

// console.log("3. Numbers:");

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0 && i % 7 != 0) {
//         console.log(i);
//     }
// }


// // 4. Print only consonants

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
//         result = result + str[i];
//     }
// }

// console.log("4. Consonants:", result);


// // 5. Find second-largest number

// let arr = [10, 25, 8, 40, 30];

// let largest = arr[0];
// let second = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         second = largest;
//         largest = arr[i];
//     }
//     else if (arr[i] > second && arr[i] != largest) {
//         second = arr[i];
//     }
// }

// console.log("5. Second largest:", second);


// // 6. Check perfect number

// let number = 28;
// let divisorSum = 0;

// for (let i = 1; i < number; i++) {
//     if (number % i == 0) {
//         divisorSum = divisorSum + i;
//     }
// }

// if (divisorSum == number) {
//     console.log("6. Perfect Number");
// }
// else {
//     console.log("6. Not a Perfect Number");
// }


// // 7. Print series 1 2 4 8 16 32 64 128

// let value = 1;

// console.log("7. Series:");

// for (let i = 1; i <= 8; i++) {
//     console.log(value);
//     value = value * 2;
// }


// // 8. First 20 Fibonacci numbers

// let a = 0;
// let b = 1;

// console.log("8. Fibonacci:");

// for (let i = 1; i <= 20; i++) {
//     console.log(a);

//     let next = a + b;
//     a = b;
//     b = next;
// }


// // 9. Average and students above average

// let marks = [45, 78, 90, 32, 56, 88];
// let total = 0;

// for (let i = 0; i < marks.length; i++) {
//     total = total + marks[i];
// }

// let average = total / marks.length;
// let aboveAverage = 0;

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > average) {
//         aboveAverage++;
//     }
// }

// console.log("9. Average:", average);
// console.log("Students above average:", aboveAverage);


// // 10. Decimal to binary

// let decimal = 13;
// let binary = "";

// for (; decimal > 0; decimal = Math.floor(decimal / 2)) {
//     let remainder = decimal % 2;
//     binary = remainder + binary;
// }

// console.log("10. Binary:", binary);


// break


// 1. Find first occurrence of 7

// let numbers = [3, 5, 9, 7, 2, 7, 8];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == 7) {
//         console.log("7 found at index:", i);
//         break;
//     }
// }


// 2. Simple password checker - maximum 5 attempts

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


// 3. Add numbers until sum exceeds 100

// let sum = 0;

// for (let i = 1; ; i++) {
//     sum = sum + i;

//     if (sum > 100) {
//         console.log("Last number added:", i);
//         break;
//     }
// }


// 4. Find first name starting with S

// let names = ["Rahul", "Amit", "Karan", "Sneha", "Riya"];

// for (let i = 0; i < names.length; i++) {
//     if (names[i][0] == "S") {
//         console.log("Name found:", names[i]);
//         break;
//     }
// }


// 5. Stop at first perfect square greater than 20

// for (let i = 1; i <= 50; i++) {
//     let square = Math.sqrt(i);

//     if (square == Math.floor(square) && i > 20) {
//         console.log("Perfect square found:", i);
//         break;
//     }

//     console.log(i);
// }


//contine


// 1. Print 1 to 30, skip numbers divisible by 4

// for (let i = 1; i <= 30; i++) {
//     if (i % 4 == 0) {
//         continue;
//     }

//     console.log(i);
// }


// 2. Sum only positive numbers

// let numbers = [10, -5, 20, -8, 15, -3, 7];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         continue;
//     }

//     sum = sum + numbers[i];
// }

// console.log("Positive sum:", sum);


// 3. Print characters but skip spaces

// let text = "Hello World";

// for (let i = 0; i < text.length; i++) {
//     if (text[i] == " ") {
//         continue;
//     }

//     console.log(text[i]);
// }


// 4. Multiplication table of 6, skip products divisible by 5

// for (let i = 1; i <= 12; i++) {
//     let product = 6 * i;

//     if (product % 5 == 0) {
//         continue;
//     }

//     console.log("6 x " + i + " = " + product);
// }


// 5. Print only voting-eligible ages

// let ages = [12, 18, 25, 15, 30, 17, 22];

// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] < 18) {
//         continue;
//     }

//     console.log("Eligible age:", ages[i]);
// }

