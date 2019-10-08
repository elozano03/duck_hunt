
var sectionElement = document.getElementsByTagName("section")[0];

var divMove = document.getElementsByTagName("div")[0];

function moveMyBall() {
    
}

var posX = Math.round(Math.random() * 450);
var posY = Math.round(Math.random() * 450);

divMove.style.left = posX + "px";
divMove.style.top = posY + "px";
console.log(divMove);

