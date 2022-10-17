setInterval(function () {
  let date = new Date();
  console.info(date);
  hours = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();
  let clock = document.getElementById("clock");
  clock.innerText = `${hours} : ${minute} : ${second}`;

  if (hours > 12) {
    hours = hours - 12;
  }
});

let todolist = [];

function clearFirstTodo() {
  let viewTodo = document.querySelector(".view-todo");
  while (viewTodo.firstChild) {
    viewTodo.removeChild(viewTodo.firstChild);
  }
}

function removeTodoList(index) {
  // splice(start, remove, add); berfungsi untuk menghapus & menambahkan data array.
  todolist.splice(index, 1);
  viewTodoList();
}

function addTodo(index, todo) {
  let div = document.createElement("div");
  div.className = "card-todo";
  let p = document.createElement("p");
  p.textContent = todo;
  div.appendChild(p);

  let input = document.createElement("input");
  input.className = "done";
  input.type = "submit";
  input.value = "Done TodoList";
  input.onclick = function () {
    removeTodoList(index);
  };

  let viewTodo = document.querySelector(".view-todo");
  viewTodo.appendChild(div);
  viewTodo.appendChild(input);
}

function viewTodoList() {
  clearFirstTodo();

  for (let i = 0; i < todolist.length; i++) {
    let todo = todolist[i];

    let searchTodolist = document
      .getElementById("searchtodolist")
      .value.toLowerCase();

    if (todo.toLowerCase().includes(searchTodolist)) {
      addTodo(i, todo);
    }
  }
}

let createTodo = document.getElementById("createtodo");
createTodo.addEventListener("click", function () {
  let addTodolist = document.getElementById("addtodolist");
  valueAddTodoList = addTodolist.value;
  todolist.push(valueAddTodoList);

  console.info(todolist);
  // call method viewTodoList
  viewTodoList();

  // reset
  addTodolist.value = "";
});

let searchTodolist = document.getElementById("searchtodolist");
searchTodolist.onkeyup = function () {
  viewTodoList();
};
searchTodolist.onkeydown = function () {
  viewTodoList();
};
