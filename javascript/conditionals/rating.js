// 1 - poor
// 2 - enm, ok
// 3 - average
// 4 - cool
// 5 - great
// 6 - awesome
// 7 - nailed it


let getStarFromUser = "3"
let starInNumber = parseInt(getStarFromUser)

if (starInNumber == 1 ){
    console.log("POOR");
}
else if (starInNumber == 2 ){
    console.log("ENM, OK");
}
else if (starInNumber == 3){
    console.log("AVERAGE");
}
else if (starInNumber == 4){
    console.log("COOL");
}
else if (starInNumber == 5 ){
    console.log("GREAT");
}
else if (starInNumber == 6 ){
    console.log("AWESOME");
}
else if (starInNumber == 7 ){
    console.log("NAILED IT");
}
else{
    console.log("I don't know that rating..!");
}

console.log("Thanks..For the rating");