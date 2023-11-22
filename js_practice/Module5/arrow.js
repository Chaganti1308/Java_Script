let a = 2;

let test1 = ()=>{
    console.log(1);
}


let test2 = ()=>{
    console.log(a+2);
}


let test3 = (a,b)=>{
    console.log(a+b);
}

// we can write it in single line.
let test4 = (a,b) => console.log(a*b);



test1()
test2(5)
test3(2,3)
test4(5,6)
