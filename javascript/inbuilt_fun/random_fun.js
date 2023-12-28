console.log(Math.random());

// You will be given two values, x and y, and you need to generate a random number 
// between x and y inclusive of x and y
/**
 * 
 * @param {*} x lower limit 
 * @param {*} y upper limit
 * @returns random number
 */
function rand_num(x,y){
    return Math.floor(Math.random()*(y-x+1)+x);
}

console.log(rand_num(10,25));

// function randomInRange(x, y) { // 10, 35 -> y-x + 1 => 35-10 + 1 -> 26
//     return Math.floor(Math.random()*(y - x + 1) + x); // [10, 36)
// }

// console.log(randomInRange(10, 35))