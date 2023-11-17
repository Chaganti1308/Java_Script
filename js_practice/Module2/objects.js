// // person object with key  value pairs


// var person = {
//     firstName : "Neeharika",
//     lastName : "Chaganti",
//     age : 26,
//     ownsCar : false
// };

// console.log(person);

// // accessing keys and values
// console.log("Person Age : " + person.age);

// // bracket notation
// console.log("Person lastname : " + person['lastName']);



var cap = {
    firstName : 'Steeve',
    lastName : 'Rogers',
    age : 60,
    friends : ['Mickey','Tom','Jerry'],
    isAvenger : false,
    address : {
        state : 'New York',
        city : {
            name : 'Brooklyn',
            postal_code : 123456
        }
    }
}

console.log(cap.friends[2]);

console.log(cap.address.city.name);

// updating the isavenger value
cap.isAvenger = true
console.log(cap);

cap.movies = ['age of ultron','civil war','first avenger']

console.log(cap);

delete cap.age
console.log(cap);