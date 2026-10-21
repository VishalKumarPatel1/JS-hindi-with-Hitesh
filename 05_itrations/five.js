const coding = ['jvascript','python','java','c++','c#','ruby','php','go','swift','kotlin'];

//1st method
// coding.forEach(function(language) {
//   console.log(`I love:- ${language}`);
  
// })

//2nd method

coding.forEach((item)=>{
//  console.log(item);
})

//3rd method

function printLanguage(language){
  // console.log(`I love:- ${language}`);
}
coding.forEach(printLanguage);



//ForEach have three parameters, first is the current value, second is the index of the current value and third is the array itself.

coding.forEach((language, index, array)=>{
  // console.log(`I love:- ${language} and index is:- ${index} and array is:- ${array}`);
  // console.log(language, index, array);
});

const myCoding = [
  {
    language: 'JavaScript', 
    year: 1995, 
    creator: 'Brendan Eich'
  },
  {
    language: 'Python', 
    year: 1991,
    creator: 'Guido van Rossum'
  },
  {
    language: 'Java',
    year: 1995,
    creator: 'James Gosling'
  },
  {
    language: 'React',
    year: 2013,
    creator: 'Jordan Walke'
  }
]

myCoding.forEach((item)=>{
  console.log(`Language is:- ${item.language} year is:- ${item.year} and creator is:- ${item.creator}`);
  
})
