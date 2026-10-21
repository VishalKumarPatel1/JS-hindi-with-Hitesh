const arr = [1,2,3,4,5,6,7,8,9,10];
for(const num of arr){
  // console.log(`value of num = ${num}`);
}


const string = "Hello World";
for(const char of string){
 
    // console.log(`charetor of string is ${char}`);
  
}

//map

const map = new Map();
map.set("name", "Vintter");
map.set("age", 25);
map.set("city", "New York");
map.set("country", "USA");
map.set("language", "English");
// console.log(map);


// 
    for(const [key, value] of map){
    console.log(`key is:- ${key} and value is:- ${value}`);

    }