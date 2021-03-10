// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.

✅ The text of the title should change when the mouse is leaves it.

✅ When the window is resized the title should change.

✅ On right click the title should also change.

✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector(".title");
const superEventHandler = {
    msOver : function() {
        title.innerText = "mouse over";
        title.style.color = colors[0];
    },
    msLeave : function() {
        title.innerHTML = "mouse leave";
        title.style.color = colors[1];
    },
    wReszie : function() {
        title.innerHTML = "Window is resizing !!";
        title.style.color = colors[2];
    },
    rClick : function() {
        title.innerHTML = "Right Click";
        title.style.color = colors[3];
    },
};

title.addEventListener("mouseover", superEventHandler.msOver);
title.addEventListener("mouseleave", superEventHandler.msLeave);
window.addEventListener("resize", superEventHandler.wReszie);
title.addEventListener("auxclick", superEventHandler.rClick);
