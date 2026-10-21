const myObject = {
  js:"JavaScript",
  py:"Python",
  rb:"Ruby",
}

for (const key in myObject) {
  console.log(key, myObject[key]);
}


const myArr = ["Ramesh", "Suresh", "Mahesh", "Ganesh"];
for (const key in myArr) {
  console.log(key, myArr[key]);
}