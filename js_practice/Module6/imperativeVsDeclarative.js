//  problem  -- Square of the number is even or not.
// imperative way of writing code


const a = 5;
const squared = a*a;

let isEven;

if(squared%2 == 0){
    isEven = true;
}
else{
    isEven = false;
}

console.log(isEven);




// declarative way 
const checkForSquare = (x) => (((x*x)%2 == 0)? true : false );

console.log(checkForSquare(4));