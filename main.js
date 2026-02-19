// Step 2: Get Elements with JavaScript
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Step 3: Store Todos in an Array
let todos = [];

// Step 4: Add Todo on Button Click
function addTodo() {
  let text = todoInput.value.trim();
  if (text !== "") {
    const newTodo = { id: `todo-${Date.now()}`, text: text, done: false };
    todos.push(newTodo); // Add to Array
    appendTodoElement(newTodo); // Append new element to the DOM
    todoInput.value = ""; // Clear input
  }
}

addBtn.addEventListener("click", addTodo); // Button Click Event

// Optional: Add Todo on Enter Key Press
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

// Step 5: Create and Append a single Todo Element
function appendTodoElement(todo) {
  const li = document.createElement("li");
  li.id = todo.id; // Add a unique ID to the li element

  li.innerHTML = `
          <span class="${todo.done ? "completed" : ""}"></span>
          <button class="del-btn">❌</button>
      `;
  // Use textContent to prevent XSS attacks
  li.querySelector("span").textContent = todo.text;

  // Toggle Done State
  li.querySelector("span").addEventListener("click", () => {
    toggleTodo(todo.id);
  });

  li.querySelector(".del-btn").addEventListener("click", () => {
    deleteTodo(todo.id);
  });

  todoList.appendChild(li);
}

// Step 6: Toggle Todo as Done
function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  todo.done = !todo.done;

  /*const span = document.querySelector(`#${id} span`);
  span.classList.toggle("completed");*/
  // One line
  document.querySelector(`#${id} span`)?.classList.toggle("completed"); 
}

// Step 7: Delete Todo
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id); // Remove from Array

  /*const li = document.getElementById(id);
  li.remove(); // Remove from DOM*/
  // One line
  document.getElementById(id)?.remove(); 
}
