function myObject(car){
    car.maker = "Audi";
}

const myCar = {
    maker : "BMW",
    model : "GLA550",
    year : 2023
}

console.log(myCar.maker); // BMW
myObject(myCar);
console.log(myCar.maker); // AUDI