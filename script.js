
var sectionElement = document.createElement("section");
document.body.appendChild(sectionElement)

var divMove = document.createElement("div");
sectionElement.appendChild(divMove)

var btn = document.createElement("button");
document.body.appendChild(btn)
btn.innerHTML = "Play"

var newDivMove = document.createElement("div");


divMove.addEventListener("click", function(event) {
    divMove.remove() 
    // sectionElement.appendChild(divMove)   
    sectionElement.appendChild(newDivMove) 
    newDivMove.setAttribute("class", "newdiv")
    newDivMove.addEventListener("click", function(event) {
        newDivMove.remove()
        sectionElement.appendChild(divMove)
    });
});


btn.addEventListener("click", function () {
    
    
    setInterval(frame, 1000);
    
    function frame() {
        
        var posX = Math.round(Math.random() * 450);
        var posY = Math.round(Math.random() * 450);
        divMove.style.left = posX + "px";
        divMove.style.top = posY + "px";
        divMove.style.transitionDuration = "2s"

        newDivMove.style.left = posX + "px";
        newDivMove.style.top = posY + "px";
        newDivMove.style.transitionDuration = "2s"
    }
})


