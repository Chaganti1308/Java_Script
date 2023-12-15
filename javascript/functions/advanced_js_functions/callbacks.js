/**
 * array -> list of numbers that we will get
 * fun -> is a function that is passed as arguement to the function. 
 */
function processArray(array, fun){
    for(let i = 0; i< array.length; i++) // iterating over every index of an array
        console.log("index " ,i, " value", array[i], "return cube value of function" , fun(array[i]));
        // i -> inedx
        // array[i] -> value at index i
        // passing value of array[i] to the fun-> cube
}

processArray([1,2,3,4,5,6],function cube(x) { return x*x*x ;}); // passing function as arguement fun -> cube
