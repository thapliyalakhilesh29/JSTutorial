//Primitive Data Types

let name = "Akhilesh"; // String
let age = 25; // Number
let isAvailable = true; // Boolean
let x; // Undefined
let y = null; // Null
let id = Symbol('id'); // Symbol
let big = 12345678901234567890n; // BigInt


//Non-Primitive (Reference) Data Types 

let user = { name: "Akhilesh", age: 25 }; // Object 
let fruits = ["Apple", "Banana", "Mango"]; // Array
let myFunc = function greet() { console.log("Hello!"); } // Function

//NOTE - data type return when we check the data type by using typeOf fucntion.

console.log(typeof 42);        // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof null);      // "object" (JavaScript bug)
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol());  // "symbol"
console.log(typeof 9007199254740991n); // "bigint"

console.log(typeof { key: "value" }); // "object"
console.log(typeof [1, 2, 3]);        // "object"
console.log(typeof function(){});    // "function"
console.log(typeof new Date());      // "object"

// Primitive Type Example
let a = 10;
let b = a; // Copy of value

b = 20;
console.log(a); // 10 (unchanged)
console.log(b); // 20

// Non-Primitive Type Example
let objA = { value: 10 };
let objB = objA; // Copy of reference

objB.value = 20;
console.log(objA.value); // 20 (both refer to the same object)
console.log(objB.value); // 20
