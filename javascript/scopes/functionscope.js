function fun(){
    console.log(x); //TDZ for x.. x is not initialized
    let x = 10;
    console.log(x); // returns undefined

}

if(true) {
    // console.log(typeof y);
    console.log(y); // TDZ for y
    const y = 10;
    console.log(y);
}
fun();
