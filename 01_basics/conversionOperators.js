let score = 33

let score2 = "33abc" // give NAN in output after conver into number


// console.log(score)
// console.log(typeof score)
// console.log(typeof score2)


// after conversion

let valueInNumber = Number(score2);

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// console.log(Number("33"));      // 33
// console.log(Number("33abc"));   // NaN
// console.log(Number("abc"));     // NaN
// console.log(Number(""));        // 0
// console.log(Number(null));      // 0
// console.log(Number(undefined)); // NaN
// console.log(Number(true));      // 1
// console.log(Number(false));     // 0



let isLoggedIn = 1                // 1->True, 0->false, "vishal"-> true, ""->false, "<SPACE>"->ture

let boolingIsLoggedIn = Boolean(isLoggedIn)
console.log(boolingIsLoggedIn)



// Now we will check Number to String convertion  and there value types

let Marks = 100;

let stringInNumber = String(Marks)

console.log(stringInNumber)
console.log(typeof stringInNumber)





console.log("*********************************** Operations **********************************") 




let value = 1
let negativValue = -value
// console.log(negativValue)


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
