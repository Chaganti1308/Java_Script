//creation of array

let x = []; //will initialises empty array

console.log(x);

let arr = [10,"array",0,false,null,undefined]; // array is initialised
console.log(arr);

// intialising array with 15 elements using Array()
let arr1 = Array(15);
console.log(arr1); // output : [ <15 empty items> ]

// length of the array
console.log(arr1.length);

// creating array with 0
let arrWithZero = Array(20).fill(0);
console.log(arrWithZero);


// select particular indexes
let arrayWithZero = Array(20).fill(0,10,15);
console.log(arrayWithZero);