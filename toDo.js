const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"); // ul

const TODOS_LS = 'toDos';
        //local storage = LS




let toDos = []; // 할 일 목록을 array에 담기

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // stringify: 자바스크립트 object를 string으로 바꿔준다.
    // local storage에는 자바스크립트의 data를 저장할 수 없다.
    // js는 ls에 있는 모든 데이터를 string으로 저장하려고 한다.
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintTodo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    span.innerHTML = text;
    delBtn.innerHTML = '🎁';
    delBtn.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li); // ul요소에 li넣기
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = ''; // submit했을 때 작성한 내용 초기화
}



function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parseToDos = JSON.parse(loadedToDos);
                        // object로 변환 => js로 다루기 위해서
        parseToDos.forEach(function (toDo) {
                //forEach: array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 준다.
            paintTodo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();