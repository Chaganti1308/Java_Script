let arr = [1,2,3,4,5]

for(let i =0; i<arr.length;i++){
    if(arr[i]%3 == 0){
        break; // when condition meets, exit from the iteration
    }
    console.log(arr[i]**2);
}