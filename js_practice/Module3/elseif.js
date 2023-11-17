// 90 to 100 -- A
// 70 to 89  -- B
// 50 to 69  -- C
//lower than 50 - F

var studentScore = 70

if(studentScore > 90){
    console.log("Student has scored A Grade");
}
else if(studentScore >= 70 && studentScore <= 89 ){
    console.log("Student has scored B Grade");
}
else if(studentScore >= 50 && studentScore <= 69){
    console.log("Student has scored C Grade");
}
else{
    console.log("Student has failed");
}