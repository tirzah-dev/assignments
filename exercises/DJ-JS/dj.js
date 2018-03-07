var square = document.getElementById("square");

square.addEventListener("mouseover", changeStyle);
square.addEventListener("mousedown", changeStyle);
square.addEventListener("mouseup", changeStyle);
square.addEventListener("dblclick", changeStyle);
window.addEventListener("wheel", changeStyle);
window.addEventListener("keyup", useKeyboardChangeStyle);



function changeStyle(event) {
    switch (event.type) {
        case "wheel":
            changeColor("orange");
            break;
// Blue when the mouse hovers over the square
        case "mouseover":
            changeColor("blue");
            break;
// Red when the mouse button is held down over the square
        case "mousedown":
            changeColor("red");
            break;
// Yellow when the mouse button is let go over the square
        case "mouseup":
            changeColor("yellow");
            break;
// Green when the mouse is double clicked in the square
        case "dblclick":
            changeColor("green");
            break;
// Orange when the mouse scroll is used somewhere in the window (not just over the square).   
    }
}

function useKeyboardChangeStyle(event){
    console.log(event.which);
    switch (event.which) {
//     // Orange when the mouse scroll is used somewhere in the window (not just over the square).
        case 79: 
            changeColor("orange");
            break;
    // Blue when the mouse hovers over the square
        case 66: 
            changeColor("blue");
            break;
    // Red when the mouse button is held down over the square
        case 82: //code: 114
            changeColor("red");
            break;
//     // Yellow when the mouse button is let go over the square
        case 89: //code: 121
            changeColor("yellow");
            break;
//     // Green when the mouse is double clicked in the square
        case 71: // code: 103
            changeColor("green");
            break;
    }
}

function changeColor(color){
    square.style.backgroundColor = color;
}



