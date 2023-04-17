// Template literals

// = delimited with (`)
// instead of double or single quotes
// allows embedded variables and expressions

let userName = "Joy";
let item = 3;
let total = 75;

//console.log("Hello", userName);
//console.log("You have", items, "items in your cart");
//console.log("Your total is $", total);

// Another Way

//console.log(`Hello ${userName}`);
//console.log(`You have ${items} items in your cart`);
//console.log(`Your total is $${total}`);

// Another Way

let text = `Hello ${userName}<br>
You have ${item} items in your cart<br>
Your total is $${total}<br>`;

document.getElementById("myLabel").innerHTML = text;
