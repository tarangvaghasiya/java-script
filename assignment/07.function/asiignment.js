//1

// var city = "Surat";
// function display() {
//     var country = "India";
//     console.log(city);
//     console.log(country);
// }
// display();

// surat
// India

//2

// var price = 500;
// function calculate() {
//     var tax = 50;
//     console.log(price + tax);
// }
// calculate();
// console.log(price);

// 550
// 500

//3

// var college = "ABC College";
// function student() {
//     var name = "Rahul";
//     var age = 20;
// }
// function teacher() {
//     var subject = "JavaScript";
// }

// college	Global scope	
// name	Function scope	
// age	Function scope	
// subject	Function scope

//4

// function first() {
//     var number = 100;
// }

// function second() {
//     console.log(number);
// }

// first();
// second();

// error :- number not defined

//5

// var college = "ABC College"; // Global variable

// function student() {
//     var name = "Rahul"; // Function-scoped variable

//     console.log("College:", college);
//     console.log("Name:", name);
// }

// student();

// console.log("Outside function:", college);

//6

// var game = "Cricket";
// function play() {
//     console.log("I like " + game);
// }
// play();
// console.log(game);

// I like Cricket
// Cricket

//7

// var language = "English";
// function showLanguage() {
//     console.log(language);
// }
// function changeLanguage() {
//     language = "Gujarati";
// }
// showLanguage();
// changeLanguage();
// showLanguage();
// console.log(language);

// English
// Gujarati
// Gujarati

//8

// function displayMarks() {
//     console.log(marks);
// }
// var marks = 75;
// displayMarks();

// 75

//9

// var color = "Red";
// function showColor() {
//     var message = "Favorite color: ";
//     console.log(message + color);
// }
// showColor();
// console.log(color);
// console.log(message);

// Red
// ReferenceError: message is not defined

//10

// var school = "Sunrise School";

// function showSchool() {
//     console.log(school);
// }

// function updateSchool() {
//     school = "Green Valley School";
// }

// showSchool();

// updateSchool();

// showSchool();

// console.log("Final value:", school);


//11

// function calculateTotal() {
//     var first = 100;
//     var second = 200;
//     console.log(first + second);
// }
// calculateTotal();
// console.log(first);

// 300
// referenceError: first is not defined

//12

// function employee() {
//     var salary = 30000;
// }
// employee();
// console.log(salary);

// ReferenceError: salary is not defined

//13

// var number = 15;
// function test() {
//     var number = 25;
//     console.log(number);
// }
// test();
// console.log(number);

// 25
// 15

//14

// function calculate() {
//     var result = 40;
//     result = result + 10;
//     console.log(result);
// }

// calculate();
// calculate();

// 50
// 50

// - result starts at 40.
// - result = result + 10 changes it to 50.
// - The function is called twice, so 50 is printed twice.

// Yes. Each time calculate() is called, a new local variable named result is created and initialized to 40.

// No. The local variable result is function-scoped and cannot be accessed directly outside the function after it finishes executing.

//15

// function calculateArea() {
//     var length = 8;
//     var width = 4;

//     var area = length * width;

//     console.log("Area of rectangle:", area);
// }

// calculateArea();

//16

// if (10 > 5) {
//     var result = "Success";
// }
// console.log(result);

// Success

//17

// var number = 1;
// if (true) {
//     var number = 2;
// }
// console.log(number);

//2

//18

// var message = "Start";
// {
//     var message = "End";
// }
// console.log(message);

// End

//19


// if (false) {
//     var result = 100;
// }

// console.log(result);

// undefined

// Explanation
// 1. Hoisting: JavaScript hoists the declaration of result to the top of its enclosing scope.
// 2. Condition is false: The assignment result = 100 does not execute because the condition is false.
// 3. Printing: The variable exists, but it has not been assigned a value, so console.log(result) prints undefined.

//20

// if (true) {
//     let secret = "Hidden";
// }

// console.log(secret);

//21

// for (var number = 2; number <= 6; number += 2) {
//     console.log(number);
// }
// console.log("Final:", number);

// 2
// 4
// 6
// Final: 8

//22

// var count = 10;
// for (var count = 1; count <= 3; count++) {
//     console.log(count);
// }
// console.log("Count:", count);

// 1
// 2
// 3
// Count: 4

//23

// var i = 5;
// while (i > 2) {
//     console.log(i);
//     i--;
// }
// console.log("After loop:", i);

// 5
// 4
// 3
// After loop: 2

//24

// for (var item = 1; item <= 3; item++) {
//     console.log("Item:", item);
// }
// console.log("Last item:", item);

// Item: 1
// Item: 2
// Item: 3
// Last item: 4

//25

// for (let step = 1; step <= 4; step++) {
//     console.log(step);
// }

// console.log(step);

// 1
// 2
// 3
// 4
// ReferenceError: step is not defined

//26

// function calculate() {
//     for (var number = 1; number <= 3; number++) {
//         console.log(number * 10);
//     }
//     console.log("Final:", number);
// }
// calculate();

// 10
// 20
// 30
// Final: 4

//27

// function student() {
//     for (var marks = 60; marks <= 80; marks += 10) {
//         console.log(marks);
//     }
//     console.log(marks);
// }
// student();
// console.log(marks);

// (console.log(marks);):- error

//28

// function test() {
//     var value = 5;
//     while (value < 8) {
//         console.log(value);
//         value++;
//     }
//     console.log("Final value:", value);
// }
// test();

// 5
// 6
// 7
// Final value: 8

//29

// function calculate() {
//     for (var i = 1; i <= 2; i++) {
//         console.log(i);
//     }
// }
// console.log(i);
// calculate();

// ReferenceError: i is not defined

//30

// function printNumbers() {
//     for (var i = 1; i <= 5; i++) {
//         console.log(i);
//     }

//     console.log("Inside function:", i);
// }

// printNumbers();


//31

// console.log(score);
// var score = 90;
// console.log(score);

// undefined
// 90

//32

// var a = 10;
// function test() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
// }
// test();

// undefined
// 20

//33

// console.log(first);
// console.log(second);
// var first = 100;
// var second = 200;
// console.log(first);
// console.log(second);

// (console.log(first);
// console.log(second);)

//34

// function calculate() {
//     console.log(total);
//     var total = 50;
//     console.log(total);
// }
// calculate();

// undefined
// 50

//35

// 1. What does the first console.log() inside the function print?
// Output: undefined

// 2. What does the final console.log() print?
// Output: 100
// Reason: The global variable price remains 100. The local variable inside showPrice() is separate from the global variable.

// 3. How does hoisting affect the local variable price?
// - The local declaration is hoisted to the top of the function scope.
// - The local variable shadows the global variable throughout the function.
// - Its initial value is undefined until the assignment price = 500 executes.
// - The global variable remains unchanged at 100.

//36

// sayHello();

// function sayHello() {
//     console.log("Hello from CodingGita");
// }

// Hello from CodingGita


//37

// display();
// function display() {
//     console.log("Function is hoisted completely");
// }

// Function is hoisted completely

//38

// greet();
// var greet = function() {
//     console.log("Hi");
// };

// TypeError: greet is not a function

//39

// console.log(typeof myFunc);
// function myFunc() {
//     return "I am hoisted";
// }
// console.log(myFunc());

// function
// I am hoisted

//40

// var message = "Hello, JavaScript!";

// showMessage();

// function showMessage() {
//     console.log(message);
// }

//41

// var institute = "CodingGita";
// function department() {
//     var dept = "CSE";
//     function batch() {
//         var year = 2025;
//         console.log(year);
//         console.log(dept);
//         console.log(institute);
//     }
//     batch();
// }
// department();

// 2025
// CSE
// CodingGita

//42

// var globalVar = "I am global";
// function outer() {
//     var outerVar = "I am outer";
//     function inner() {
//         console.log(globalVar);
//         console.log(outerVar);
//         console.log(innerVar); // this line
//     }
//     inner();
// }
// outer();

// ReferenceError: innerVar is not defined

//43

// var a = 1;
// function level1() {
//     var b = 2;
//     function level2() {
//         var c = 3;
//         function deep() {
//             console.log(a, b, c);
//         }
//         deep();
//     }
//     level2();
// }
// level1();

// 1 2 3

//44

// var x = "global";
// function first() {
//     var x = "first";
//     function second() {
//         console.log(x);
//     }
//     second();
// }
// first();
// console.log(x);

// first
// global

//45

// var globalVar = "I am Global";

// function outer() {
//     var outerVar = "I am Outer";

//     function middle() {
//         var middleVar = "I am Middle";

//         function inner() {
//             var innerVar = "I am Inner";

//             console.log(innerVar);
//             console.log(middleVar);
//             console.log(outerVar);
//             console.log(globalVar);
//         }

//         inner();
//     }

//     middle();
// }

// outer();

//46

// var score = 50;
// function test() {
//     var score = 90;
//     console.log(score);
// }
// test();
// console.log(score);

// 90
// 50

//47

// var name = "Global Name";
// function show() {
//     var name = "Local Name";
//     console.log(name);
// }
// show();
// console.log(name);

// Local Name
// Global Name

//48

// var value = 10;
// function update() {
//     value = 20;          // no var
//     console.log(value);
// }
// update();
// console.log(value);

// 20
// 20

//49

// var color = "Blue";
// function changeColor() {
//     var color = "Red";
//     console.log("Inside:", color);
// }
// changeColor();
// console.log("Outside:", color);

// Inside: Red
// Outside: Blue

//50

// var marks = 70; // Global variable

// function showMarks() {
//     var marks = 95; // Local variable shadows the global variable

//     console.log("Inside function:", marks);
// }

// showMarks();

// console.log("Outside function:", marks);

//51

// function outer() {
//     var teacher = "Kartik Sir";
//     function inner() {
//         var student = "Jenil";
//         console.log(student);
//         console.log(teacher);
//     }
//     inner();
// }
// outer();

// Jenil
// Kartik Sir

//52

// function parent() {
//     var a = "Parent";
//     function child() {
//         var b = "Child";
//         function grandchild() {
//             var c = "Grandchild";
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//         grandchild();
//     }
//     child();
// }
// parent();

// Parent
// Child
// Grandchild

//53

// function outer() {
//     var secret = "Hidden";
//     function inner() {
//         console.log(secret);
//     }
// }
// inner();
// outer();

// ReferenceError: inner is not defined

//54

// function createMessage() {
//     var greeting = "Hello";
//     function show() {
//         console.log(greeting + " students");
//     }
//     return show;
// }
// var messageFunc = createMessage();
// messageFunc();

// Hello students

//55

// function studentInfo() {
//     var name = "Rahul";
//     var course = "JavaScript";

//     function display() {
//         console.log("Name:", name);
//         console.log("Course:", course);
//     }

//     display();
// }

// studentInfo();

//56

// function test() {
//     x = 100; // missing var
// }
// test();
// console.log(x);

// 100

//57

// if (true) {
//     var x = 20;
// }
// console.log(x);

// 20

//58

// console.log(a);
// var a = 10;

// undefined

//59

// var x = 10;
// var x = 20;
// console.log(x);

// 20

//60

function calculate() {
    let total = 0;

    for (let i = 1; i <= 5; i++) {
        total = total + i;
    }

    console.log("Total inside function:", total);
}

calculate();

// console.log(total); // Error if uncommented