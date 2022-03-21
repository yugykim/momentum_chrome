const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
}


function painTodo(newTodo) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerHTML = newTodo;
   const button = document.createElement("button");
   button.innerHTML = "❌";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  painTodo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => toDos.push(item));
  parsedToDos.forEach(painTodo);
}  