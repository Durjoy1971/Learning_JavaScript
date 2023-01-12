/*

1. Declaration ( var, let, const)
2. Assignment (= assignment operator)

*/

let first_name = "Durjoy";
let age = 22;
let job = "Student"

console.log("Hello : " , first_name);
console.log("You are ", age, " years old");
console.log("You are a ", job);

document.getElementById("name").innerHTML = "Hello " + first_name;
document.getElementById("age").innerHTML = "You are " + age + " years old";
document.getElementById("job").innerHTML = "Enrolled: " + job;
