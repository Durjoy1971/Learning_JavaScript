
// usefull string properties and methods

let userName = "Durjoy Barua";

console.log(userName.length);

console.log(userName.charAt(0));
console.log(userName.charAt(5));

console.log(userName.indexOf('y'));
console.log(userName.lastIndexOf('a'));

userName = "Durjoy            ";
console.log(userName);

userName = userName.trim();
console.log(userName);

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

let phoneNumber = "0193-3939394"

phoneNumber = phoneNumber.replaceAll("-","");

console.log(phoneNumber);

