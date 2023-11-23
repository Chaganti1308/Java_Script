const squared = (num) =>{
    let sq = num*num
    console.log(`${num}  square is ${sq}`);
    return(sq%10 == 0)
}

let isDivisibleBy10 = (squareFun , no) =>{
    const isNumDivisible = squareFun(no)
    console.log(`square of number ${no} is divisible by 10  is ${isNumDivisible} `);
}

isDivisibleBy10(squared,25)