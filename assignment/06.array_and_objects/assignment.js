//1

// 1.a special, global object used to store an ordered collection of multiple values under a single variable name

// 2.The technical term for the position of a value inside an array is index

// 3. 0

// 4. 30

// 5. 3

//2

// 1. • Array Literal Notation (e.g., const arr = [];)    • The Array Constructor (e.g., const arr = new Array();)

// 2. The array literal notation (using square brackets []) is the method recommended by the notes.

//3.

// const student = ["jenil","Mahir","Priyesha","Yashvi"]

//4.

// const marks = new Array(85, 90, 78);

//5.

// new

//3

//1. To access a specific value stored in an array, you use bracket notation enclosing the item's index number

//2

// jenil

//3

// Priyesha

//4

// undefined


//5

//console.log(colors[0]);

//4

//1. To update a specific value inside an existing JavaScript array, you use bracket notation with the item's index and assign a new value to it using the assignment operator (=).


//2.


//marks[1] = 95;

//3.

// [80, 95, 90]


//4.

// False. You do not need a special built-in method like update() to change an array element's value.

//5.

// automatically expand to accommodate the new index

//5

//1

// const fruits = ["apple", "banana", "cherry"];

// console.log(fruits.length); // Output: 3

//2:-4

//3:- 0

//4:- it dynamically tracks the size of the array in real time

//5:- It is a property, not a function call.

//6

//1:-for and WHILE

//2:-arr.length

//3:-after the array access statement, right before the loop's closing curly brace.

//4:-

// const students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

//5:-

// If your loop condition incorrectly uses <= instead of <, the loop will attempt to execute one extra time and will log undefined during its final iteration.

//6:-

// const subject = ["Math", "Science", "History"];

// for (const sub of subject) {
//   console.log(sub);
// }


//7:- eliminates manual indexing and prevents off-by-one errors

//8:-

// This code will cause a runtime error and throw a ReferenceError: indexOf is not defined.

//7

//1:- .push()

//2:- .unshift()

//3:- 

// let nums = [1,2,3]

// nums.push(4)

// console.log(nums)


//4:-

// let nums = [1,2,3]

// nums.unshift(0)

// console.log(nums)

//5:-

// True. Both push() and unshift() modify the original array directly.

//8

//1:-.pop().

//2:-.shift().

//3:-

// let nums = [100, 200, 300, 400, 500];

// nums.pop();

// console.log(nums)

//4:-

// let nums = [100, 200, 300, 400, 500];

// nums.shift();

// console.log(nums)

//5:-

// true

//9

//1:-the zero-based numeric index of its first occurrence

//2:-   -1

//3:-  1

//4:-  -1

//5:-  

// let student = ["Jenil", "Mahir", "Arjun","Priyesha"];

// console.log(student.indexOf("Priyesha"))

//10