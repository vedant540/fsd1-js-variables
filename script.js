// 1
console.group("Question 1 - Welcome");
console.log("Welcome to JavaScript");
console.groupEnd();

// 2
console.group("Question 2 - Student Details");
const studentName = "Vedant Waychal";
const rollNumber = "[Roll Number Pending]";
const branch = "Computer Science and Engineering";
const city = "[Sample City]";
console.log("Name:", studentName);
console.log("Roll number:", rollNumber);
console.log("Branch:", branch);
console.log("City:", city);
console.groupEnd();

// 3
console.group("Question 3 - Changing Marks");
let marks = 50;
console.log("Initial marks:", marks);
marks = 75;
console.log("Updated marks:", marks);
console.groupEnd();

// 4
console.group("Question 4 - const Reassignment");
const collegeName = "MIT Vishwapragyag University";
console.log("College:", collegeName);
try {
  collegeName = "Another College";
} catch (error) {
  console.error("Caught expected error:", error);
}
console.groupEnd();

// 5
console.group("Question 5 - Redeclaration");
var legacyValue = "First value";
var legacyValue = "Redeclared value";
console.log("var after redeclaration:", legacyValue);
try {
  // eval creates an isolated compilation unit. Its duplicate lexical declaration
  // is a real SyntaxError and cannot prevent later questions from running.
  eval('let repeated = "first"; let repeated = "second";');
} catch (error) {
  console.error("Caught expected let redeclaration error:", error);
}
console.groupEnd();

// 6
console.group("Question 6 - Undefined Variable");
let x;
console.log("Before assignment:", x);
x = "Hello";
console.log("After assignment:", x);
console.groupEnd();

// 7
console.group("Question 7 - Swap Values");
let a = "Mango";
let b = "Apple";
let temp = a;
a = b;
b = temp;
console.log("a:", a);
console.log("b:", b);
console.groupEnd();

// 8
console.group("Question 8 - Counter");
let count = 0;
console.log(count);
count = 1;
console.log(count);
count = 2;
console.log(count);
count = 3;
console.log(count);
console.groupEnd();

// 9
console.group("Question 9 - Corrected Code");
let price = 100;
const correctedCity = "Pune";
let correctedName = "Riya";
correctedName = "Asha";
console.log("Price:", price);
console.log("City:", correctedCity);
console.log("Name:", correctedName);
console.groupEnd();

// 10
console.group("Question 10 - Student Card");
const cardName = "Vedant Waychal";
let age = 20;
const course = "FSD1 JavaScript";
const college = "MIT Vishwapragyag University";
console.log("Name:", cardName);
console.log("Age:", age);
console.log("Course:", course);
console.log("College:", college);
console.groupEnd();
