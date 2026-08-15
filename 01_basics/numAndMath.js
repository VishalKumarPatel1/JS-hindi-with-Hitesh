const score  = 400;
// console.log(score);



const balance = new Number(100);
// console.log(balance);


console.log(balance.toString().length)
// console.log(balance.toFixed(1))


const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3));

const hundredes = 10000000;
// console.log(hundredes.toLocaleString())


console.log("************************  MATH  *************************")



console.log(Math);            // it retrun-> Object [Math] {}
console.log(Math.abs(-4));    // it return 4 
console.log(Math.round(4.6)); // it took round 5, if it is 4.3 it took 4
console.log(Math.ceil(5.6));  // it took higher no.
console.log(Math.floor(5.6)); // it tool lees no.

console.log(Math.min(1,5,4,9,8))
console.log(Math.max(1,5,4,9,8))
console.log(Math.floor(Math.random()*10)+1)


const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)