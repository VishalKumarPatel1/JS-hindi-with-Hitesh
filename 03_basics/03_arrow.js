const { log } = require("console");

const user = {
  userName: 'Vishal kumar patel',
  age:29,
  welcomeMassage:function(){
    console.log(`${this.userName}, Welcome to the website`);
    
  }
}
user.welcomeMassage();

user.userName = 'Sam';

user.welcomeMassage();

//How to define arrow function in javascript

const arrowFunction = () => {
  let userName = 'Ravi';
  console.log('This is arrow function');
  console.log(`User Name is ${this.userName}`); //User Name is undefined
  console.log(this);  //{}
  
  // TASK:- Now do R&D with normal function and arrow function with this keyword.
}
arrowFunction();
//important:- Arrow function does not have its own this keyword, it uses the this keyword from its parent scope. Normal function has its own this keyword.


// // explicit return in Normal function
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
}
console.log(addTwoNumbers(5, 10)); // 15

// implicit return in arrow function

const addTwoNumbersImplicit = (num1, num2) => num1 + num2;
log(addTwoNumbersImplicit(5, 20)); // 25


const addName = (firstName, lastName) =>({username:'Raju'}) // object sould be wrapped in parentheses to avoid ambiguity with the function body.
console.log(addName()); // { username: 'Raju' } 
