
// slice() extracts a section of a string
//         and returns it as a new string
//         without modifying the original string

let fullName = "Durjoy Barua";

let firstName;
let lastName;

firstName = fullName.slice(0,6);
lastName = fullName.slice(7);

console.log(firstName);
console.log(lastName);

// automated procedure

fullName = "Joyiti Barua"

firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);


