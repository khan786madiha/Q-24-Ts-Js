"use strict";
// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// // • Tests using "and" and "or" operators
// • Test whether an item is in a array
// // • Test whether an item is not in a array
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests for equality and inequality with strings
const string1 = "Apple";
const string2 = "Orange";
console.log(string1 === string2);
console.log(string1 !== string2);
// / • Tests using the lower case function
const mixedCaseString = "Helloworld";
console.log(mixedCaseString.toLowerCase() === "helloworld");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 15;
const num2 = 10;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// / • Tests using "and" and "or" operators
const Condition1 = true;
const Condition2 = false;
console.log(Condition1 && Condition2);
console.log(Condition1 || Condition2);
// / • Test whether an item is in a array
// Test whether an item is not in a array
const Fruits = ["amna", "shagufta", "uzma", "anum"];
console.log(Fruits.includes("amna"));
console.log(Fruits.includes("Amna"));
