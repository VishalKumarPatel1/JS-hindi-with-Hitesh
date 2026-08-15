const marvelHeros = ['thor', 'ironman', 'spriderman'];
const dcHeros = ['superman', 'batman', 'flash']


//How to push arrey into another array
// marvelHeros.push(dcHeros)
// console.log(marvelHeros)


// how concat array with other array
const allHeros = marvelHeros.concat(dcHeros)
console.log('Concat:-',  allHeros )



// how to spread array

const allNewHeros = [...marvelHeros, ...dcHeros]
console.log('Spread:-', allNewHeros);


//The maximum recursion depth
//Returns a new array with all sub-array elements concatenated into it

const anotherArray = [1,4,5,[2,1,6],7,6,[9,5,[3,5]]]
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray("Vishal"));
console.log(Array.from("Ankita"))
console.log(Array.from('Gungun'))


let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1, score2,score3));

