const d = Date();
// Date() returns a new date object in the form of string

console.log(d);  // prints date
console.log(typeof d); //type of date

const dt = new Date(); // to get date object, we do new Date()
console.log(dt);

console.log(dt.getDate()); // extracts only date 
console.log(dt.getMonth()); // extracts month from 0 index i.e Jan - 0,feb - 1,..
console.log(dt.getFullYear());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getDay()); // 4 
console.log(dt.getTimezoneOffset());
console.log(dt.toDateString());  //Output :  Thu Jan 04 2024
console.log(dt.toLocaleDateString()); // o/p : 1/4/2024


const custom = new Date('10-12-2023');
console.log(custom.toDateString());

