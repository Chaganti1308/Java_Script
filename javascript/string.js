const username = "neeharikachaganti"

// returns value at zero index
console.log(username[0]);

//length of the string
console.log(username.length);

//returns the character at 5th index
console.log(username.charAt(5))

//returns the string from index 1 to 5-1(n-1).
console.log(username.substring(1,5))
let email = "   chaganti  "

// to trim the space in start and end
console.log(email.trim());

// to trim the spaces at the start of the string
console.log(email.trimStart());

// to trim the spaces at the end of the string
console.log(email.trimEnd());


let Email = "Ncc@gmail.com"

//replace is used to replace the strings
console.log(Email.replace('nc','neeharikachaganti'));

//converts string to uppercase
console.log(Email.toUpperCase());

//converts string to lowercase
console.log(Email.toLowerCase());