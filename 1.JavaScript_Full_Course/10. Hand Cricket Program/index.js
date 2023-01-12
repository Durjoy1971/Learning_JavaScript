
/*let player_name = window.prompt("Enter Your Name: ");*/

let totalrun = 0;
let user_chosen = 0;
let cpu_chosen = 0;

function running(){
    console.log("User Chosen : ", user_chosen)

    cpu_chosen = Math.floor(Math.random()*6) + 1;

    console.log("Cpu Chosen : ", cpu_chosen);

    if(user_chosen == cpu_chosen)
    {
        alert("You are out !!\nYour Total Run : " +  totalrun + "\nBetter Luck Next Time");
        totalrun = 0;
    }
    else
    {
        totalrun += user_chosen;

        document.getElementById("userCap").innerHTML= user_chosen;

        document.getElementById("cpuCap").innerHTML= cpu_chosen;

        document.getElementById("resultCap").innerHTML= "You Have Scored " + user_chosen;

        document.getElementById("totalRunCap").innerHTML= totalrun;
    }
}


document.getElementById("oneButton").onclick= function(){
    user_chosen = 1;
    running();
}

document.getElementById("twoButton").onclick= function(){
    user_chosen = 2;
    running();
}

document.getElementById("threeButton").onclick= function(){
    user_chosen = 3;
    running();
}

document.getElementById("fourButton").onclick= function(){
    user_chosen = 4;
    running();
}

document.getElementById("fiveButton").onclick= function(){
    user_chosen = 5;
    running();
}

document.getElementById("sixButton").onclick= function(){
    user_chosen = 6;
    running();
}


