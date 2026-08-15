const accountId = 654654;
let accountEmail ="vishalkumarpatel7654@gmail.com"
var accountPassword = "5436536"
accountCity = "Varanasi";

accountEmail ="raju7654@gmail.com"
accountPassword = "09865"
accountCity = "Delhi";

console.table([accountId,accountEmail, accountPassword, accountCity ])

// JavaScript has 8 data types. They are divided into 2 categories.

// 1. Primitive Data Types (7)

// These store a single value.

// Data Type	          Example	                             Description
// Number	              let age = 25;	                         Integers and decimals
// String	              let name = "Vishal";	                 Text enclosed in quotes
// Boolean	              let isLoggedIn = true;	             true or false
// Undefined	          let x;	                             Variable declared but not assigned a value
// Null	              let user = null;	                     Represents an intentional empty value
// BigInt	              let big = 12345678901234567890n;	     Very large integers
// Symbol	              let id = Symbol("id");	             Unique and immutable value


// 2. Non-Primitive (Reference) Data Type (1)

// Objects store collections of values.

// Data Type	                Example
// Object	                    { name: "Vishal", age: 25 }

// Arrays, functions, and dates are all special kinds of objects.

// let person = {
//   name: "Vishal",
//   age: 25
// };

// let fruits = ["Apple", "Mango", "Banana"]; // Array (Object)

// function greet() {
//   console.log("Hello");
// } // Function (Object)



// Check the data type using typeof
// console.log(typeof 42);            // number
// console.log(typeof "Hello");       // string
// console.log(typeof true);          // boolean
// console.log(typeof undefined);     // undefined
// console.log(typeof null);          // object (this is a historical JavaScript bug)
// console.log(typeof 123n);          // bigint
// console.log(typeof Symbol());      // symbol
// console.log(typeof {});            // object
// console.log(typeof []);            // object
// console.log(typeof function(){});  // function