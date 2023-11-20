// create an object

var colors = {
    primary : "Blue",
    secondary : "Red",
    tertiary : "White"
}


// syntax
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


for(var color in colors){
    console.log(color + " --> " +colors[color]);
}