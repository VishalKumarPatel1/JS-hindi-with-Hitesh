const { log } = require("node:console");

let a =400;
var c=200; //200
if(true){
  const a =10;
  let b = 20;
  var c = 30;
}


// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 30



//nested function
function one (){
  const userName = 'Vishal';

  function two(){
    const website = 'Patel';
    console.log(userName); // Vishal
  }
  // console,log(website); // ReferenceError: website is not defined
  two();
}
one();

log(addOne(5)); // 6
function addOne(num){
  return num + 1;
}


console.log(addTwo(5)); // 7  //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
  return num + 2;
} 


