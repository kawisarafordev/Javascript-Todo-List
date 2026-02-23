// Step 2: Get Elements with JavaScript
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Step 3: Store Todos in an Array
let todos = [];

//Step 4: Add Todo on Button Click
function addTodo() {
  let text = todoInput.value.trim();
  if (text !== "") {
    todos.push({ text: text, done: false });
    todoInput.value = "";
    renderTodos();
  }
}

// Button Click Event
addBtn.addEventListener("click", addTodo);

// Optional: Add Todo on Enter Key Press
todoInput.addEventListener("keypress", (enter) => {
  if (enter.key === "Enter") addTodo();
});

// Step 5: Render Todo List
function renderTodos() {
  todoList.innerHTML = ""; // Clear List

  todos.forEach((todo, index) => {
    let li = document.createElement("li");

    // Step 6: Mark Todo as Done
    li.innerHTML = `
            <span class="${todo.done ? "completed" : ""}"></span>
            <button class="del-btn">❌</button>
        `;

    // Use textContent to prevent XSS attacks
    li.querySelector("span").textContent = todo.text;

    // Toggle Done State
    li.querySelector("span").addEventListener("click", (e) => {
      todos[index].done = !todos[index].done;
      e.target.classList.toggle("completed");
    });

    // Click Delete Button
    li.querySelector(".del-btn").addEventListener("click", () => {
      deleteTodo(index);
    });

    todoList.appendChild(li);
  });
}

// Step 7: Delete Todo
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
