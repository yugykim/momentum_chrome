//const loginForm = document.getElementById("login-form");
//const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 

function onLoginSumbit(event){
  //this stops default behaviour any events. 브라우저가 기본적으로 행하는 것들이 디폴트이다. 이 것을 추가함으로서 그것을 막는다
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};


function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `HELLO ${username}`;
}

loginForm.addEventListener("submit", onLoginSumbit);


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSumbit);
} else {
  // show the greetings 
  paintGreetings(savedUsername);
};