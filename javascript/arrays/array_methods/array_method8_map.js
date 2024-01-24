// double th array using map

arr = [1,5,10,15,20];

const doubled = arr.map(num => {
    return num * 2;
})

console.log("Original  Array is : ", arr);
console.log("Doubled Array is : ", doubled);



const products = [{id:1, name : "iphone" , price :"100000"},{id:2, name : "samsung" , price :"80000"},{id:3, name : "vivo" , price :"50000"}]

console.log(products);

const modifiedProducts = products.map(product => {
    return {id:product.id, name:product.name}
})

console.log("Modified products : ",modifiedProducts);