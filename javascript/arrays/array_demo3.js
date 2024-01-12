// how to add elements to an array

let x = [1,2,3,4,5]
console.log("Before Adding : ", x);

x.push(6); // add value at the last of the array
console.log("After Adding : ", x);

x.unshift(-1);// -1 adds at the starting of the array
console.log("After unshift : ", x);

//remove element from the start
x.shift();
console.log("After shifet : ", x);

// remove element from the end
x.pop();
console.log("After pop element : ", x);

x.push(10,20);
console.log("After Adding : ", x);

console.log(x[-1]);