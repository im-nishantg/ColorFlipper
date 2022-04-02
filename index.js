var hex = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];



function colorGenerator()
{

    var color = "#";

    for(var i=0; i<6; i++)
    {
        var index = Math.floor(Math.random()*15);
        color+=hex[index];
    }

    document.getElementById("currentColor").innerHTML = color;
    document.querySelector("body").style.backgroundColor = color;

}

document.querySelector(".btn").addEventListener('click',colorGenerator);
