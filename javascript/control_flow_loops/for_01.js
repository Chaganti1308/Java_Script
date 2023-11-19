// const array = ['neeha','chaganti']

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// printing from 1 to 10

// for (let userScore = 1; userScore <= 10 ; userScore++){
//     console.log(`User score is ${userScore}`);
// }
// let userScore = 1
// let higherScore = 10

// for (userScore; userScore <= higherScore ; userScore++){
//     console.log(`User score is ${userScore}`);
// }

// printing from 10 to 0
// let userScore = 10
// const minValue = 0

// for (userScore; userScore >= minValue ; userScore--){
//     console.log(`User score is ${userScore}`);
// }


// if score hits 5, don't print
//using break
// let userScore = 10
// const minValue = 0

// for (userScore; userScore >= minValue ; userScore--){
//     if(userScore == 5){
//         break;
//     }
//     console.log(`User score is ${userScore}`);
// }

// using continue, skip the matched condition

let userScore = 10
const minValue = 0

for (userScore; userScore >= minValue ; userScore--){
    if(userScore == 5){
        continue;
    }
    console.log(`User score is ${userScore}`);
}