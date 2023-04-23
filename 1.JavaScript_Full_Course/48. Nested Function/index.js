// nested functions = Functions inside other functions.
//                    Outer functions have access to inner functions.
//                    Inner functions are "hidden" from outside.
//                    used in closures.

let userName = "Durjoy";
let userInbox = 0;

login();

function login() {
  // const displayUser = () => console.log(`Testing Arrow Function`);
  // displayUser();

  displayUserName();
  displayUserInbox();

  function displayUserName() {
    console.log(`Welcome ${userName}`);
  }
  function displayUserInbox() {
    console.log(`You have ${userInbox} new messages`);
  }
}
