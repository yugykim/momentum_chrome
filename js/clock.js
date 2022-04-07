const clock = document.querySelector("h2#clock");
const todayDate = document.getElementById("today-date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

window.addEventListener("load", (event) => {
  const date = new Date();
  const year = String(date.getFullYear()).padStart(2, "0");
  const hour = String(date.getMonth()).padStart(2, "0");
  const minute = String(date.getDay()).padStart(2, "0");
  todayDate.innerHTML = `${year}-${hour}-${minute}`;
});