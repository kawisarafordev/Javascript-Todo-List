# Todo List – Beginner Mini Project

## What you will learn

- DOM selection
- Event handling
- Array state management
- Rendering lists
- Basic delete / toggle logic

---

## 🎯 Requirements

1. User can **add a todo**
2. Todo is shown in a list
3. User can **mark todo as done**
4. User can **delete a todo**
5. Input clears after adding

---

## 🧩 Step-by-Step Exercises

---

## Step 1: HTML Structure

Create:

- an input
- an “Add” button
- an empty list (`ul`)

---

## Step 2: Get Elements with JavaScript

Select elements by ID.

---

## Step 3: Store Todos in an Array

Each todo should have:

- `text`
- `done`

Example object:

```jsx
{text:"Buy coffee",done:false }
```

---

## Step 4: Add Todo on Button Click

- Ignore empty input
- Push a new object to `todos`
- Clear input

---

## Step 5: Render Todo List

Create a function `renderTodos()` that:

- clears `<ul>`
- loops todos
- creates `<li>` elements

Call `renderTodos()` after adding a todo.

---

## Step 6: Mark Todo as Done

- Clicking a todo toggles `done`
- Use line-through style

---

## Step 7: Delete Todo

Add a delete button ❌ for each todo.

---

## 🆚 Code Comparison: V1 vs V2

Here is a breakdown of the differences between the **Basic Loop Rendering (V1)** and the **Optimized DOM Manipulation (V2)** approaches.

### 1. Adding Items

**Version 1 (`Basic`)**: Adds to the array and triggers a full re-render.

```javascript
todos.push({ text: text, done: false });
renderTodos(); // ⚠️ Re-renders the entire list
```

**Version 2 (`Optimized`)**: Adds with a unique ID and appends only the new element.

```javascript
const newTodo = { id: `todo-${Date.now()}`, text: text, done: false };
todos.push(newTodo);
appendTodoElement(newTodo); // ✅ Appends only the new item
```

### 2. Rendering Strategy

**Version 1**: Clears the list and loops through the array to rebuild DOM.

```javascript
function renderTodos() {
  todoList.innerHTML = ""; // ⚠️ Clears everything
  todos.forEach((todo, index) => { ... });
}
```

**Version 2**: Creates a single element with an ID and appends it.

```javascript
function appendTodoElement(todo) {
  const li = document.createElement("li");
  li.id = todo.id; // ✅ Assigns unique ID
  todoList.appendChild(li);
}
```

### 3. Deleting Items

**Version 1**: Removes by array index and re-renders.

```javascript
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos(); // ⚠️ Re-renders list to update indices
}
```

**Version 2**: Filters by ID and removes the specific DOM element.

```javascript
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  document.getElementById(id)?.remove(); // ✅ Removes only this element
}
```

### 📊 Summary Table

| Feature | Version 1 (Basic) | Version 2 (Optimized) |
| :--- | :--- | :--- |
| **Update Strategy** | Full Re-render (`innerHTML = ""`) | Direct DOM Manipulation |
| **Identification** | Array Index | Unique ID (`Date.now()`) |
| **Performance** | Slower as list grows | Fast & Constant (O(1)) |
| **Complexity** | Low (Easier for beginners) | Medium (Best Practice) |