function myName(){
  console.log('V');
  console.log('I');
  console.log('S');
  console.log('H');
  console.log('A');
  console.log('L'); 
}
// myName();

function addTwoNumbers(num1, num2){
  return num1 + num2;
}
const result = addTwoNumbers(5, 10);
// console.log(result);  


function isUserLogedIn(userName){
// if(userName === undefined)
  // or
 if(!userName)
  
  {
  console.log("Please enter valid User Name");
  return;
}
return `${userName} is logged in`;

}
// console.log(isUserLogedIn());

function calculation(...num){
  return num;
}
// console.log(calculation(200, 300, 400, 500)) 

// how to pass object into function 

const user = {
  name: 'Vishal Kumar Patel',
  age: 28,
  instructor: 'Hitesh Choudhary'
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.name}, Age is ${anyObject.age}, Instructor is ${anyObject.instructor}`);
  
}
// handleObject(user);

// it is not nacessory to pass object into function, we can also destructure the object in function parameter.

// we can pass object into function and destructure it in function parameter.

// handleObject({
//   name: 'Sam',
//   age: 28,
//   instructor: 'Ravi Patel'
// });


//How to Pass array Into function.

const arr = [1, 2, 3, 4, 5];

function handleArray(anyArray){
  return anyArray[1];
}
// console.log(handleArray(arr));
console.log(handleArray([1, 2, 3, 4, 5]));