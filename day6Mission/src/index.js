// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let range = document.querySelector('.range');
let chNumber = document.querySelector('.chNumber');
let inNumber = document.querySelector('.inNumber');
let comNumber = document.querySelector('.comNumber');


const result = document.querySelector('.result');
const start = document.querySelector('.start');
const play_btn = document.querySelector('.play');
const SHOWING = "showing";


function rangeHandle() {
    chNumber.innerHTML = chNumber.value;
}

function clickHandle() {
    result.classList.add(SHOWING);
    start.classList.remove('start');
    chNumber.innerHTML = inNumber.value;
    comNumber.innerHTML = random(0, range.value);
    if (comNumber.innerHTML === chNumber.innerHTML) {
        result.innerText = "You Win!"
    } else {
        result.innerText  = "You lost!"
    }
    
    start.classList.add(SHOWING);

}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// range.addEventListener('change', rangeHandle)
play_btn.addEventListener('click', clickHandle)

