let a = 4
// impure function
function addImpure(x){
    console.log(x+a);
}

addImpure(10)


// partial pure function

function addPure(x,a){
    console.log(x+a);
}

addPure(2,3)

addPure(2,3)


function pure(a,b){
    return a+b;
}

console.log(pure(5,6));