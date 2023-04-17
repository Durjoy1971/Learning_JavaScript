
let visible_number = 0;

document.getElementById("increaseButton").onclick = function(){
    visible_number++;
    document.getElementById("totalNumber").innerHTML=visible_number;
}

document.getElementById("resetButton").onclick = function(){
    visible_number=0;
    document.getElementById("totalNumber").innerHTML=visible_number;
}

document.getElementById("decreaseButton").onclick = function(){
    visible_number--;
    document.getElementById("totalNumber").innerHTML=visible_number;
}