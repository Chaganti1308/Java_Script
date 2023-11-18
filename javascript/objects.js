const user = {
    userName : "Neeha",
    name : "Neeharika",
    email : "nc@gmail.com",
    age : 27,
    isAdmin : false,
    isLoggedIn : true,
    tea : ["lemon","ginger","masala"],
    address : {
        city : "Hyderabad",
        state : "Telengana"
    }
}

console.log(user['email']);  // -- output : nc@gmail.com
console.log(user.age);   // -- output : 27
console.log(user.tea[1]);  // -- output : ginger
console.log(user.address.city);  // -- output : Hyderabad
