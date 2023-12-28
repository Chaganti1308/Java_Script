// Major diff btw let and var exists around scoping mechanism

// let and const supports block scope, if block scope is not present then global scope
// var supports function scope, if function scope is not present then global scope

// let and const supports TDZ(Temparal Dead Zone)
// vavr doesn't support TDZ

//diff btw let and const is reassignment.
// using let value can be reassigned but using const can't

// example let
// function letReassignment(){
//     let x = 10;
//     console.log(x);
//     x = "Neeharika Chaganti";
//     console.log(x);
// }

// letReassignment();

// example const
// function constReassignment(){
//     const x = 10;
//     console.log(x);
//     x = "Neeharika Chaganti"; //throws error -- reassignment is not possible
//     console.log(x);
// }

// constReassignment();

// example with const with objects
// function constReassignmentWithObj(){
//     const obj = {x:10, y:20};
//     console.log(obj);
//     obj = {x:5}; // reassigning to brand new object -- throws an error
//     console.log(obj);
// }

// constReassignmentWithObj();


// example with objects
function constObjReassignment(){
    const o = {x:100, y:0};
    o.x = 90; // don't throw any errors
    o.z = 99;
}
constObjReassignment();