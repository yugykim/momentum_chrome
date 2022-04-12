const clock = document.querySelector("h2#clock");
const todayDate = document.getElementById("todo-form");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
/*
window.addEventListener("load", (event) => {
  const date = new Date();
  const year = String(date.getFullYear()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  todayDate.innerHTML = `<input type="text" placeholder="${year}-${month}-${day}" />`;
  console.log(date.getDate());
});*/
