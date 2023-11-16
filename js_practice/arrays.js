// creating an array

var arr = [10,'benz',true, 12.4]

console.log(arr);


// access the elements
var a = arr[1]
console.log(a);

// can directly access the element without storing into another variable
console.log(arr[3]);



//replace array element
arr[1] = 'AUDI';
console.log(arr);
console.log(`Updated array is  ${arr} `);

//array length
console.log("Array Length is : " + arr.length);