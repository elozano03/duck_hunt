
var sectionElement = document.getElementsByTagName("section")[0];

var btn = document.getElementsByTagName("button")[0];

var divMove = document.getElementsByTagName("div")[0];

btn.addEventListener("click", function () {
    
    
    setInterval(frame, 1000);

    function frame() {
        var posX = Math.round(Math.random() * 450);
        var posY = Math.round(Math.random() * 450);
        divMove.style.left = posX + "px";
        divMove.style.top = posY + "px";
        divMove.style.transitionDuration = "2s"
    }
})


