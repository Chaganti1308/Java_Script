// adding numbers with some number(user choice) of arguements.

function addNumbers(){

    // returns length of arguements
    // console.log(arguments.length);
    // returns zero index elements
    // console.log(arguments[0]); 

    let result = 0;
    for (let i =0; i< arguments.length;i++){
        result += arguments[i];
    }
    return result;
}

console.log(addNumbers(10));
console.log(addNumbers(1,2,3));
console.log(addNumbers(4,5,6,7,8));
console.log(addNumbers(1,2,3,4,5,6,7));
console.log(addNumbers(1,2,3,4,5,6,7,8,9));

