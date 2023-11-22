function add(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

function mul(a,b){
    console.log(a*b);
}

function div(a,b){
    console.log(a/b);
}

// add (2,3)
// sub(10,5)
// mul(10,10)
// div(9,3)

module.exports = {
    addition : add,
    subtraction : sub,
    multiplication : mul,
    division : div
}