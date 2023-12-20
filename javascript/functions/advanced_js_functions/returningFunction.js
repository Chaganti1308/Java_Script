function fun(){
    console.log("Callerd the function fun...");

    return function cleanUo(){
        console.log("Cleanig up the resources");
    }
}

const result = fun();
result();