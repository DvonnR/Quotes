console.log("connected");

var rply = document.getElementById("speaker");
var info = document.getElementById("author");
var btn = document.getElementById("btn");


async function JSONinfo(){
    const response = await fetch("https://type.fit/api/quotes");

    const data = await response.json();
    
    var position = Math.floor(Math.random() * data.length + 1);
    
    console.log(position);
    rply.innerHTML = data[position].text;
    if(data[position].author == null){
        info.innerHTML = "~ Author is unknown";
    }
    else{
        info.innerHTML = "~ " + data[position].author;
    }
    
    
}

