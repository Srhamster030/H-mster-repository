document.addEventListener("DOMContentLoaded", function(){
    const kick = new Audio("sounds/kick.wav");
    const snare = new Audio("sounds/snare.wav");
    const yo = new Audio("sounds/yo.wav");
    const yuh = new Audio("sounds/yuh.wav");
    const tom = new Audio("sounds/tom.wav");
    const openhat = new Audio("sounds/openhat.wav");
    const hihat = new Audio("sounds/hihat.wav");
    const cowbell = new Audio("sounds/cowbell.wav");
    const clap = new Audio("sounds/clap.wav");

    const kickDiv = document.querySelector("#kick");
    const snareDiv = document.querySelector("#snare");
    const yoDiv = document.querySelector("#yo");
    const yuhDiv = document.querySelector("#yuh");
    const tomDiv = document.querySelector("#tom");
    const openhatDiv = document.querySelector("#openhat");
    const hihatDiv = document.querySelector("#hihat");
    const cowbellDiv = document.querySelector("#cowbell");
    const clapDiv = document.querySelector("#clap");

    window.addEventListener("keydown", function(event){
        if(event.key == "a") {
            kick.currentTime = 0;
            kick.play();
            kickDiv.classList.add("active");
        } else if (event.key == "s") {
            snare.currentTime = 0;
            snare.play();
            snareDiv.classList.add("active");
        }else if (event.key == "d") {
            yo.currentTime = 0;
            yo.play();
            yoDiv.classList.add("active");
        }else if (event.key == "f") {
            yuh.currentTime = 0;
            yuh.play();
            yuhDiv.classList.add("active");
        }else if (event.key == "g") {
            tom.currentTime = 0;
            tom.play();
            tomDiv.classList.add("active");
        }else if (event.key == "h") {
            openhat.currentTime = 0;
            openhat.play();
            openhatDiv.classList.add("active");
        }else if (event.key == "j") {
            hihat.currentTime = 0;
            hihat.play();
            hihatDiv.classList.add("active");
        }else if (event.key == "k") {
            cowbell.currentTime = 0;
            cowbell.play();
            cowbellDiv.classList.add("active");
        }else if (event.key == "l") {
            clap.currentTime = 0;
            clap.play();
            clapDiv.classList.add("active");
        }
    })

    window.addEventListener("keyup", function(event){
        if (event.key == "a") {
            kickDiv.classList.remove("active");
        }else if (event.key == "s") {
            snareDiv.classList.remove("active");
        }else if (event.key == "d") {
            yoDiv.classList.remove("active");
        }else if (event.key == "f") {
            yuhDiv.classList.remove("active");
        }else if (event.key == "g") {
            tomDiv.classList.remove("active");
        }else if (event.key == "h") {
            openhatDiv.classList.remove("active");
        }else if (event.key == "j") {
            hihatDiv.classList.remove("active");
        }else if (event.key == "k") {
            cowbellDiv.classList.remove("active");
        }else if (event.key == "l") {
            clapDiv.classList.remove("active");
        }

    })
})
