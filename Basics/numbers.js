const num = new Number(5.234568)

// converts to string datatype
console.log(num.toString());
console.log(typeof num.toString()); //string

// precision after .(point)
console.log(num.toFixed(3));

const subscribersCount = 10000000
console.log(subscribersCount.toLocaleString());



// using math
console.log(Math); // returns an object

// generates a random number between 0 to 1
console.log(Math.random());

// used to round value
console.log(Math.floor(Math.random()*10));

console.log(Math.ceil(Math.random()*10));