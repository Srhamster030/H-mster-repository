document.querySelector("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function() {

    let name = document.querySelector("#name").value;
    console.log("Hi "+ name);

    document.querySelector("h1").innerHTML = "Hi " + name;

    let now = new Date();

    let hour = now.getHours();
    if(hour < 12){
        document.querySelector("#time").innerHTML = "おはようございます!☀️";
    } else if (hour < 18){
        document.querySelector("#time").innerHTML = "こんばんは!🌇";
    } else {
        document.querySelector("#time").innerHTML = "おやすみなさい~🌃";
    }

    return false; //Prevents website from reloading
    }
});
