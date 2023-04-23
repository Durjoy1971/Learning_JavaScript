// arrow function expression =
// compact alternative to a traditional function expression
//      =>

// traditional function

// const greeting = function(userName){
//   console.log(`hello ${userName}`);
// }

// const greeting = (userName) => {
//   console.log(`Hello ${userName}`);
// }

// const greeting = (userName) => console.log(`Hello ${userName}`);
// greeting("Durjoy");

// const max_bet = (a,b) => {
//   if(a >= b) console.log(`${a} is bigger number`);
//   else console.log(`${b} is bigger number`);
// }
// max_bet(5,6);

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((a,b) => a-b)
grades.forEach((element) => console.log(element));