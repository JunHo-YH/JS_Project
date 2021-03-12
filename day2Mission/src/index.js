// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector(".body")
function colorHandler() {
    let width = window.innerWidth;
    console.log(width);
    if(width <= 300) {
        body.className = "small";
    } else if(width >= 301 && width <= 500) {
        // body.style.backgroundColor = "blue"
        body.className = "middle";
    } else {
        body.className = "large";
    }

}


    body.className = "base";
    window.addEventListener("resize", colorHandler);





