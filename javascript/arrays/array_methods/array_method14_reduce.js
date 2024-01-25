const products = [
    {product :'laptop',price:25000,quantity:1},
    {product :'airpods',price:20000,quantity:2},
    {product :'adapter',price:2500,quantity:4}
]

// let total_price = 0;
// products.forEach(pro =>{
//     total_price += pro.price*pro.quantity;
// });

// console.log(total_price);
// total price of cart


const result = products.reduce(function reducer(accumulator,currentValue){
    return accumulator + currentValue.price * currentValue.quantity;
},0)

console.log(result);