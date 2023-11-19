// if email is present , ask for password.
// if not , ask for email.

// const email = "neeha@gmail.com"

// if (email == 'neeha@gmail.com'){
//     console.log("Please enter password : ");
// }
// else{
//     console.log("Your email is not available. Please enter email : ");
// }

// let email = "neeha@gmail.com"

// if (email == ''){
//     console.log("Please enter password : ");
// }
// else{
//     console.log("Your email is not available. Please enter email : ");
// }

let email = "neeha@gmail.com"

if (email){
    console.log("Please enter password : ");
}
else{
    console.log("Your email is not available. Please enter email : ");
}
console.log(Boolean(email));

// falsy values -- false,0,"",null,undefined,NaN


// if user provides email,password then allow login
// if else ask for email and password.

// let userEmail = "neeha@gmail.com"
// let userPass = "neeha@9149"

// if(userEmail== '' && userPass == ''){
//     console.log("You are able to login");
// }
// else{
//     console.log("Please enter you email and password ");
// }


// let userEmail = ""
// let userPass = ""

// if(userEmail){
//     if(userPass){
//         console.log("You are able to login. Welcome to the app.");
//     }
//     else{
//         console.log("Please enter password");
//     }
    
// }
// else{
//     console.log("Please enter you email and password ");
// }


// allow user to sign-in with google or github
let googleLoginToken = ""
let githubLoginToken = ""

if(googleLoginToken || githubLoginToken){
    console.log("Welcome to the app");
}
else{
    console.log("Please login to view your account");
}