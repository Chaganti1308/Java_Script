var a = 21

var a = 35 // we are redeclaring value

console.log(a); // 35

if (a===35){
    var b = 40;
    console.log(b); // output - 40
}

console.log(b); // output - 40  -- out of block , even though it is accessed

function test(){
    var c = 10;
    console.log(c);
}        

test()
console.log(c); //  -- error because of function scope