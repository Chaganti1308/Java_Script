// 1 - poor
// 2 - enm, ok
// 3 - average
// 4 - cool
// 5 - great
// 6 - awesome
// 7 - nailed it


let getStarFromUser = "3"
let starInNumber = parseInt(getStarFromUser)

switch(starInNumber){
    case 1:
        console.log("POOR");
        break;
    case 2:
        console.log("ENM, OK");
        break;
    case 3:
        console.log("AVERAGE");
        break;
    case 4:
        console.log("COOL");
        break;
    case 5:
        console.log("GREAT");
        break;
    case 6:
        console.log("AWESOME");
        break;
    case 7:
        console.log("NAILED IT");
        break;
    default:
        console.log("I don't know that rating..!");
}
console.log("Thanks..For the rating");
