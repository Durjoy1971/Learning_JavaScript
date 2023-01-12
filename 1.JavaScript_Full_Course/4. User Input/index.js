// How to accept user input

// Easy Way With Window Prompt

/*let username = window.prompt("What's your name ? ");
console.log(username);*/


// Difficult Way Html Textbox

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLevel").innerHTML = "Hello " + username;
}

