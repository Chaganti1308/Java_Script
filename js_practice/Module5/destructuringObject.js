let person ={
    name : "Chaganti",
    age : 25,
    gender : 'Female',
    address :{
        country : 'India',
        city : 'Hyderabad'
    }
}

console.log(person);

// let {a,b,c} = person  -- will get undefined values.
// console.log(a);
// console.log(b);
// console.log(c);
 


// let {name,age,gender} = person

// console.log(name);
// console.log(age);
// console.log(gender);

let {name : n,age : a,gender:g,address:{country}} = person

console.log(n);
console.log(a);
console.log(g);
console.log(country);