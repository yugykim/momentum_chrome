//require two arguments 
//function that takes a geolocationposition objects as its sole input parameter.

const API_KEY ="e587985272ff201d965eee460b165ebd";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json().then(data => {
    const weather = document.querySelector("#today-date");
    const city = document.querySelector("#city");
    weather.innerText = `${data.weather[0].main} /  ${data.main.temp}`;
    city.innerText = data.name;

  }));
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)