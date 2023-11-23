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



let printResult = (evenFn , num ) =>{
    const isNumEven = evenFn(num)

    console.log(`The numbere ${num} is an even number ${isNumEven}`);
}

printResult(isEven,16)