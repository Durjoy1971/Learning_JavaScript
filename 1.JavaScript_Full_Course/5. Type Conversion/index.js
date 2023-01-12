
// Type Conversion -> Change The Datatype of a value to
//    another (strings, numbers, booleans)

let age = window.prompt("How old are you ? ")

age = Number(age);

age += 1;

console.log("Age : ", age);

x = Number(age);
y = String(age);
z = Boolean(age);


console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
