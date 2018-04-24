window.onload = clickCount;

var count = document.getElementById("count");
var counter = JSON.parse(localStorage.getItem("count")) || 0;

function clickCount(event) {
    localStorage.setItem("count", JSON.stringify(counter));
    count.innerHTML = counter++;
}
window.onclick = clickCount;