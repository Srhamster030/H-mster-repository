// document.addEventListener("DOMContentLoaded", function(){
//     const dp.wav = new Audio("alarm/dp.wav");

let counter = 10;

function count() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 100);
    };
});
let counter = 12;

function count() {
    counter--;
    document.querySelector('h2').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 100);
    };
});
// window.addEventListener("button", function(event){
//         if(event.key == "a") {
//             dp.currentTime = 9;
//             dp.play();
//             dpDiv.classList.add("active");
//         }

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('button').onclick = function(){
//     setInterval(count, 100);
    };
});
