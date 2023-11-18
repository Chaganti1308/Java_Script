const myArray = [1,2,3,4,5,6,7,8,9,10]

//const myArray = new Array[1,2,3,4,5,6,7,8,9,10]

//value at 2nd index
console.log(myArray[2]);

const hero = ["batsman","spiderman","flash"]

//length of array
console.log(hero.length);

// adds to array list
const addHero = hero.push("captain america")
console.log(addHero)

// deletes from list
const deleteHero = hero.pop()
console.log(deleteHero)


const food = ["pizza","burger",["chinese","tandoori","indian"]]

console.log(food);

// chooses outer array first, in that go for 2nd index
// and selects first element in the inner array
console.log(food[2][1]); // displays 2nd index element's -  1st index element in the inner array  

console.log(food.indexOf("burger"));