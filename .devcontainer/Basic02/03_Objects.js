//object literals
const Deepak = {
    name: "kumar",
    age: 24,
    email: "dharma813101@gmail.com",
    mobno: 9934615516,
    isLoggedIn: false,
    lastLoginDay: ["monday", "tuesday"]
}
//acces the objects

console.log(Deepak["email"]);
console.log(Deepak["mobno"]);
//use to free object 
//Object.freeze(Deepak)
 Deepak.greeting = function(){
    console.log("hello Deepak");

 }
 console.log(Deepak.greeting());

