
document.getElementById("submitButton").onclick= function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(a*a+b*b);

    document.getElementById("clabel").innerHTML = "Side C: " + c ;

}

