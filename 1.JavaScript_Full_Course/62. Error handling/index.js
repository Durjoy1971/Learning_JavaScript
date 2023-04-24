// error = object with a description of
//             something that went wrong

// throw = executes a user-defined error

// try{
//     console.lag();
// }
// catch(error){
//     console.log(error);
//     // console.log("Hello World");
// }

try {
  let x = window.prompt("Enter a #");
  x = Number(x);

  if (isNaN(x)) throw "That wasn't a number!";
  if (x == "") throw "That was empty!";

  console.log(`${x} is a number`);
} catch (error) {
  console.log(error);
  // console.log("Hello World");
}
// Good For CleanUp
finally{
    console.log("This always executes");
}