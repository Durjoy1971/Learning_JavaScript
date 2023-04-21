document.getElementById("submitButton").onclick = function(){
    
    let temp = document.getElementById("inputField").value;
    temp = Number(temp);

    if(document.getElementById("cButton").checked)
    {
        document.getElementById("afterConvert").innerHTML= toCelsius(temp).toFixed(2) +"°C";
    }
    else if(document.getElementById("fButton").checked)
    {
        document.getElementById("afterConvert").innerHTML= toFahrenhiet(temp).toFixed(2) +"°F";
    }
    else
    {
        document.getElementById("afterConvert").innerHTML= `Select a Unit`;
    }

    
}

function toCelsius(temp)
{
    return ((temp-32)*(5/9));
}

function toFahrenhiet(temp)
{
    return temp * 9 / 5 + 32;
}