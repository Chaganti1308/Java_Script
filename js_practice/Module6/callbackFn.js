// function printFirstName(firstname, callBackFn){
//     console.log(firstname)
//     callBackFn("Neeha")
// }

// printFirstName("Chaganti", printLastName)

// function printLastName(lastname){
//     console.log(lastname);
// }

// printLastName("Neeharika")


// arrow functions for callback function example

const isEven = (n) =>{
    return (n%2 == 0)
}

// let isEvenNumber = function(n){
//     return(n%2 == 0)
// }



// let printResult = (evenFn , num ) =>{
//     const isNumEven = evenFn(num)

//     console.log(`The numbere ${num} is an even number ${isNumEven}`);
// }

let printRes = function(evenFun,num){
    const isNoEven = evenFun(num)
    console.log(`The numbere ${num} is an even number ${isNoEven}`);
}

// printResult(isEven,16)
printRes(isEven,16)