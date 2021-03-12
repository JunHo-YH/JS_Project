// import "./styles.css";

// You're gonna need this

const h1 = document.querySelector(".h1");


function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900").getTime();
  const DateNowInfo = new Date();
  const gap = xmasDay - DateNowInfo;

  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((gap % (1000 * 60)) / 1000);

  h1.innerHTML = `${day < 1 ? 0 : day}일 ${hour < 9 ? }시간 ${min}분 ${sec}초 남았습니다.`;



}

function init() {
  setInterval(getTime, 1000);
}
init();
