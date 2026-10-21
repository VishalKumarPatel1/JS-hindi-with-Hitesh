// const coding = ['jvascript','python','java','c++'];

// const values = coding.forEach((item)=>{
//   console.log(item);
// })
// console.log(values); //this will return undefined because forEach does not return a new array, it simply executes the provided function on each element of the array. If you want to create a new array with the results, you should use the map method instead.


//Fiter !st method
const myNum= [1,2,3,4,5,6,7,8,9];
const newNums = myNum.filter((num)=>(num>4));
console.log(newNums); 


//Filter 2nd method
const arrNum= [1,2,3,4,5,6,7,8,9];
const newArrNum = arrNum.filter((num)=>{
  return num>4
});
console.log(newArrNum); //The filter() method creates a new array containing only the elements that pass a condition.We can write an arrow function with return or without return using parentheses. Both give the same result.



//now how to do this using ForEach method

const arrNum2= [1,2,3,4,5,6,7,8,9];
const newArrNum2 = [];
arrNum2.forEach((num) =>{
  if(num>4){
    newArrNum2.push(num);
  }
})
console.log(newArrNum2); //The forEach() method executes a provided function once for each array element. In this case, we are checking if the number is greater than 4 and pushing it to a new array.





const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 2004
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    publish: 1992,
    edition: 2008
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1999,
    edition: 2007
  },
  {
    title: "Book Four",
    genre: "Non-Fiction",
    publish: 1989,
    edition: 2010
  },
  {
    title: "Book Five",
    genre: "Science",
    publish: 2009,
    edition: 2014
  },
  {
    title: "Book Six",
    genre: "Fiction",
    publish: 1987,
    edition: 2010
  },
  {
    title: "Book Seven",
    genre: "History",
    publish: 1986,
    edition: 1996
  },
  {
    title: "Book Eight",
    genre: "Science",
    publish: 2011,
    edition: 2016
  }
];

const userBooks = books.filter((book) => book.genre === "History");
console.log(userBooks); //The filter() method creates a new array containing only the elements that pass a condition. In this case, we are filtering the books array to get only the books with the genre "Fiction".
console.log('**********************************************');

const userBooks2 = books.filter((book) => {return book.publish > 1990});
console.log(userBooks2); //The filter() method creates a new array containing only the elements that pass a condition. In this case, we are filtering the books array to get only the books published after 1990.