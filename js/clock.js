const clock = document.querySelector("h2#clock");
const date = new Date();

function sayHello() {
  clock.innerHTML = `Year: ${date.getFullYear()} Date : ${date.getDate()} Time: ${date.getTime()}`;
}

setInterval(sayHello, 1000);