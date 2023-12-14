// named function expression

const isEvenOrOdd = function process(num){
    return num%2 == 0;
}

// we can call with the variable name, where we are storing the result
const result = isEvenOrOdd(50); //false
console.log(result);

console.log(isEvenOrOdd(29)); //false