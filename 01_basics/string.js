let name = "Vishal Kumar Patel";
let age  = 25;

console.log (`Hello i'm ${name}, And i'm ${age} year old `)

const gameName = new String('vishal')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.toLocaleUpperCase()) //all in capital latter

console.log(gameName.charAt(3))
console.log(gameName.indexOf('l'))

console.log(gameName.substring(0,4))
console.log(gameName.slice(0,3))


const newStringOne = "     Vatsal.     ";
console.log(newStringOne)
console.log(newStringOne.trim())



console.log("************************* Replace String  ***********************");

const url = "https://vishal%10kumar%10patel.com"
console.log(url.replace('%10', '-'))                  // for single replacement


console.log(url.replaceAll('%10', '-'))              // for multipall repalce 