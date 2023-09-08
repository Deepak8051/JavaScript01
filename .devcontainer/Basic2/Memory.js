//stack (primitive) 
//heap(non primitive)
let myYoutubename = "Deepak042"
let anothername = myYoutubename
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "dsharma813101@gmail.com",
    upi : "Deepak042"

}
let userTwo = userOne
userTwo.email ="viratkumar042@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);