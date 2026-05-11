let counter = 3;

function count() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    setTimeout(count, 0);
    document.querySelector("button").disabled = true;
    };
});

if count 
