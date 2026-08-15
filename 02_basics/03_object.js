
const mySym = Symbol("key1");


const user = {
    name: "Rahul",
    age: 19,
    [mySym]: "mykey1",
    location: 'Jaipur',
    email: 'rahul@gmail.com' ,
    isLoggedin: false,
    lastLoggedIn: ['Monday', 'Saturday'] 
}

console.log(user);
console.log(user[mySym]);


user.email = 'rahulpatel@gmail.com';
Object.freeze(user);
user.email = "jahnvi@gmail.com";

console.log(user)