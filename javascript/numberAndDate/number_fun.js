// to use number functions, use with Number keyword

// finding max intiger number and min integer number
console.log(Number.MAX_VALUE); // + infinity
console.log(Number.MIN_VALUE); // - infinity

// conversion from decimal to binary
const x = 15;
console.log((x.toString(2)));
console.log((x.toString(8)));

// if u call toString with out any arguement, it just coverts the number to string

// binary to decimal
//using parseInt

console.log(parseInt("20" ,8));
console.log(parseInt("111010", 2));


// NaN => Not A Number
num = 10.23456897
console.log(num.toPrecision(5)) // will prints 5 digits
console.log(num.toFixed(5)); // it will prints 5 digits after decimal


//zero
const zero = 0;
const pos_zero = +0;
const neg_zero = -0;
