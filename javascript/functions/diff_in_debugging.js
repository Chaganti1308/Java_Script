const isEvenOrOdd = function(num){
    console.trace("Trace of functions....")
    return num%2 == 0;
}

const named_fn_expr = function exec(){
    const result = isEvenOrOdd(50);
}

const anonymous_fn_expr = function (){
    const result = isEvenOrOdd(51);
}

named_fn_expr();
// anonymous_fn_expr();

