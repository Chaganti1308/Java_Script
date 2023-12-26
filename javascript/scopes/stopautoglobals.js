"use strict"  // enables strict mode

var teacher = "SS";

function fun(){
    var teacher = "Anurag";
    // content = "JS"; // it is not auto global. Because strict mode  is enabled and throws an error
    console.log("Welcome to ", teacher , "lecture");
}

function gun(){
    var student = "Neeha"
    console.log("Hello my dear student ", student,".","Teacher for your class is ", teacher);
}

// console.log(teacher,content); 

fun();
gun();

// console.log(teacher,content);

console.log(teacher);