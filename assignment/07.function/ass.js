
// // 1. Function Concept
// // Advantages: Reusability, less repetition, easy debugging, modularity.


// // 2. Function Declaration
// function greetStudent(name) {
//     return "Hello " + name + ", welcome to CodingGita!";
// }

// console.log(greetStudent("Tarang"));
// console.log(greetStudent("Rahul"));


// // 3. Hoisting
// greet();

// function greet() {
//     console.log("Hello, Student!");
// }


// // 4. Function Expression
// const calculateAverage = function(a, b, c) {
//     return (a + b + c) / 3;
// };

// console.log(calculateAverage(80, 90, 70));


// // 5. Parameters vs Arguments
// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(12, 5));
// // Parameters: x, y
// // Arguments: 12, 5


// // 6. Return Statement
// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(24));
// console.log(isEven(17));


// // 7. Multiple Parameters
// function findPercentage(obtainedMarks, totalMarks) {
//     return (obtainedMarks / totalMarks) * 100;
// }

// console.log(findPercentage(456, 500));


// // 8. Function Without Return
// function showMessage() {
//     console.log("Hello, Student!");
// }

// let result = showMessage();
// console.log(result);


// // 9. Simple Interest
// const calculateSimpleInterest = function(principal, rate, time) {
//     return (principal * rate * time) / 100;
// };

// console.log(calculateSimpleInterest(10000, 5, 2));


// // 10. Student Name and Marks
// function studentResult(name, marks) {
//     return "Student " + name + " has scored " + marks + " marks.";
// }

// console.log(studentResult("Tarang", 95));
// console.log(studentResult("Rahul", 88));



// // 11. Function Scope

// // a) Global scope: A variable declared outside a function.
// // Local scope: A variable declared inside a function.

// // b)
// function displayAge() {
//     let age = 20;
//     console.log("Age:", age);
// }

// displayAge();

// // console.log(age); // ReferenceError: age is not defined

// let course = "JavaScript";

// function displayCourse() {
//     console.log("Course:", course);
// }

// displayCourse();


// // 12. Combining Multiple Concepts

// function analyzeStudent(name, m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;

//     return name + " scored total " + total +
//            " with average " + average;
// }

// console.log(analyzeStudent("Tarang", 80, 90, 70));
// console.log(analyzeStudent("Rahul", 75, 85, 90));


// // 13. Nested Functions

// // a) A function declared inside another function is called a nested function.

// function studentReport(name, m1, m2, m3) {
//     function total() {
//         return m1 + m2 + m3;
//     }

//     return name + " total marks: " + total();
// }

// console.log(studentReport("Tarang", 80, 90, 70));


// // 14. Report Card Generator

// function generateReport(name, m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;
//     let result;

//     if (average >= 40) {
//         result = "Pass";
//     } else {
//         result = "Fail";
//     }

//     return "Student Name: " + name +
//            "\nTotal Marks: " + total +
//            "\nAverage: " + average.toFixed(2) +
//            "\nResult: " + result;
// }

// console.log(generateReport("Tarang", 80, 90, 70));
// console.log(generateReport("Rahul", 25, 35, 30));


// // 15. Multiple Utility Functions

// function sumOfThree(a, b, c) {
//     return a + b + c;
// }

// function averageOfTwo(x, y) {
//     return (x + y) / 2;
// }

// function maxOfTwo(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// function fullName(first, last) {
//     return first + " " + last;
// }

// console.log("Sum:", sumOfThree(10, 20, 30));
// console.log("Average:", averageOfTwo(40, 60));
// console.log("Maximum:", maxOfTwo(15, 25));
// console.log("Full Name:", fullName("Tarang", "Vaghasiya"));


// // 16. Grade Calculator

// const calculateGrade = function(percentage) {
//     if (percentage >= 90) {
//         return "A+";
//     } else if (percentage >= 80) {
//         return "A";
//     } else if (percentage >= 70) {
//         return "B";
//     } else if (percentage >= 60) {
//         return "C";
//     } else if (percentage >= 40) {
//         return "D";
//     } else {
//         return "F";
//     }
// };

// console.log(calculateGrade(95));
// console.log(calculateGrade(82));
// console.log(calculateGrade(67));
// console.log(calculateGrade(45));
// console.log(calculateGrade(32));


// // 17. Shopping Discount

// function calculateFinalPrice(price, discountPercent) {
//     let discount = price * discountPercent / 100;
//     return price - discount;
// }

// console.log(calculateFinalPrice(2500, 15));
// console.log(calculateFinalPrice(1200, 10));


// // 18. Temperature Converter

// const celsiusToFahrenheit = function(c) {
//     return (c * 9 / 5) + 32;
// };

// const fahrenheitToCelsius = function(f) {
//     return (f - 32) * 5 / 9;
// };

// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(25));

// console.log(fahrenheitToCelsius(32));
// console.log(fahrenheitToCelsius(98.6));


// // 19. Mixed Advanced Question

// // a) A const/let function expression cannot be called before
// // its variable is initialized.

// const sayHello = function() {
//     return "Hello!";
// };

// console.log(sayHello());

// // b) Nested function example

// function calculateSquareAndDouble(number) {
//     function square() {
//         return number * number;
//     }

//     return square() * 2;
// }

// console.log(calculateSquareAndDouble(5));


// // 20. Challenge Question

// function processStudent(name, m1, m2, m3) {
//     function calculateTotal() {
//         return m1 + m2 + m3;
//     }

//     let total = calculateTotal();
//     let average = total / 3;
//     let result;

//     if (average >= 40) {
//         result = "Pass";
//     } else {
//         result = "Fail";
//     }

//     return "Student: " + name +
//            "\nTotal: " + total +
//            "\nAverage: " + average.toFixed(2) +
//            "\nResult: " + result;
// }

// console.log(processStudent("Tarang", 80, 90, 70));
// console.log(processStudent("Rahul", 75, 85, 90));
// console.log(processStudent("Amit", 25, 35, 30));


// function compareAverages(avg1, avg2) {
//     if (avg1 > avg2) {
//         return "First average is higher";
//     } else if (avg2 > avg1) {
//         return "Second average is higher";
//     } else {
//         return "Both averages are equal";
//     }
// }

// console.log(compareAverages(80, 90));
// console.log(compareAverages(85, 75));
// console.log(compareAverages(80, 80));
