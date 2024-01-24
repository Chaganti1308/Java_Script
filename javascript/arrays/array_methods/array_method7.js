arr = [10,20,30,40,50]

const res = arr.forEach((element,index) => {
    console.log("Element at index", index," is ", element);
});

console.log(res);  // undefined


ar = [1,2,3,4,5] // original array

const result = ar.map((element,index) => {
    console.log("Element at index", index," is ", element);
    return element*element;
});

// Map returns us an array
console.log(result);  //[ 1, 4, 9, 16, 25 ]
console.log(ar); // [1,2,3,4,5]