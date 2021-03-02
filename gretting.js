const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    gretting = document.querySelector('.js-grettings'); // h4

const USER_LS = 'currentUser',
    SHOWING_CN = 'showing';




function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGretting(currentUser);// 한 번 저장하면 value값만 변경해서 한 번 더 save해줄 필요 없다.
    }

}

function askForName() {
    form.classList.add(SHOWING_CN);       // classlist : 해당 태그에 클래스를 추가한다. // 왜 추가했을까?
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault(); // 기본동작 막기
    const currentValue = input.value
    paintGretting(currentValue);
    saveName(currentValue);
}


function paintGretting(text) {
    form.classList.remove(SHOWING_CN);  // 왜 삭제하는데?
    gretting.classList.add(SHOWING_CN); // h4에 showing class 추가 
    gretting.innerText = `Hello ${text}`;
}

function saveName(text) { // 한 번 저장하면 value값만 변경해서 ok.
    localStorage.setItem(USER_LS, text); 
}



function init() {
    loadName();
}

init();