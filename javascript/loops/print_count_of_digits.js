let num = 5213;
let sum = 0;
while(num>0){
    let reminder = num%10;
    sum = sum+reminder
    num = Math.floor(num/10)
}
console.log(sum);

