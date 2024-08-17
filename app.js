let inputTodo = document.getElementById("inputBox");
let errorMessage = document.getElementById("errorMessage");
let eachTodo = "";
const todoArr = [];

function addTodo() {
  if (inputTodo.value != "") {
    todoArr.push(inputTodo.value);
    inputTodo.value = "";
    renderTodo();
  } else {
    errorMessage.innerHTML = "Please enter something to add!";
  }
}

function renderTodo() {
  let todoListHtml = "";
  for (let i = 0; i < todoArr.length; i++) {
    eachTodo = todoArr[i];
    const todoLineHtml = `<div class="todo-line">
      <p class="todo-text">${eachTodo}</p>
      <button class="delete-btn" onclick ="todoArr.splice(${i},1);renderTodo()">Delete</button>
     </div>`;
    todoListHtml += todoLineHtml;
  }
  document.querySelector(".todo-list").innerHTML = todoListHtml;
}
function removeError() {
  errorMessage.innerHTML = "";
}
