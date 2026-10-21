// JavaScript reduce() Method — Notes
// The reduce() method processes each element of an array and reduces it to a single value, such as a sum or product.


// Syntax:

// array.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, initialValue);

// Example:
const array1 = [1, 2, 3, 4];
const initialValue = 0;

const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial); // 10



// In detail

const arrNum2= [1,2,3,4,5,6,7,8,9];
const sumTwo = arrNum2.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
  
  return accumulator + currentValue;
}, 0);
console.log(sumTwo);



//2nd mthod
const newNumSum = arrNum2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(newNumSum);


const shoppingCart = [
  {
    course: "JavaScript",
    price:2999
  },
  {
    course: "Python",
    price:1999
  },
  {
    course: "Java",
    price:3599
  },
  {
    course: "React",
    price:2999
  },

]

const payAmount = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(payAmount);
