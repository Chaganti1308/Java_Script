a = [1,2,3,4,5,6,7]

const oddElements = a.filter((element)=>{
    return element % 2  != 0;
})

console.log("Filtered odd elements are : ",oddElements);