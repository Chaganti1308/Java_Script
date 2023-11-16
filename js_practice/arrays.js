// // creating an array

// var arr = [10,'benz',true, 12.4]

// console.log(arr);


// // access the elements
// var a = arr[1]
// console.log(a);

// // can directly access the element without storing into another variable
// console.log(arr[3]);



// //replace array element
// arr[1] = 'AUDI';
// console.log(arr);
// console.log(`Updated array is  ${arr} `);

// //array length
// console.log("Array Length is : " + arr.length);

var arr2 = [13,14,15,16]

// // pop method
// arr2.pop()  //pop out the last element
// console.log("Popped array : " ,arr2);


// //push method
// arr2.push(17) // inserts the element at the last of the array
// console.log("Pushed(updated) array : ",arr2);


//shift method
var d = arr2.shift()
console.log(d);

console.log("Shifted array : ",arr2);

//unshift method
arr2.unshift(100)
console.log("Unshifted array : ", arr2);