
var sectionElement = document.createElement("section");
document.body.appendChild(sectionElement)

var divMove = document.createElement("div");
sectionElement.appendChild(divMove)

var btn = document.createElement("button");
document.body.appendChild(btn)
btn.innerHTML = "Play"

for (let i = 0; i < 10; i++) {
    function killduck(event) {
        this.remove()
        // sectionElement.appendChild(divMove)   
        divMove = document.createElement("div");
        sectionElement.appendChild(divMove);
        divMove.addEventListener("click", killduck);
    }

    divMove.addEventListener("click", killduck);

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

}


