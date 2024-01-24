const numbers = [12,14,3,5,8,9,12,31]
let sumOdd = 0;
const result = numbers.forEach((element) => {
    if (element %2 != 0){
        sumOdd += element
    }
})

console.log("The sum of odd numbers in the array is ",sumOdd); 