// lambda function -- > in JS arrow functions () => {}

function processArray(array, fn) {
    
    for(let i = 0; i < array.length; i++) { // iterating over every index of the array
        console.log("index", i, "value", array[i], "return value of fn", fn(array[i]));
    }
}

processArray([1,2,3,4,5], (x) => { return x*x*x;})  // passing function as arguement  fn -> cube

processArray([2,3,4,1,5], x => x*x*x); // you have only one line and that too a return statement of function