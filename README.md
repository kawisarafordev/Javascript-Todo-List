# JavaScript Todo List

> A simple, interactive Todo List application built with vanilla JavaScript.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

List the key features of your project here:

- **Add Tasks**: Easily add new tasks to your list via input field.
- **Mark as Done**: Click on a task text to toggle its completion status.
- **Delete Tasks**: Remove unwanted tasks with a single click on the delete button.
- **Keyboard Support**: Press `Enter` to quickly add a new task.
- **Secure Rendering**: Uses `textContent` to prevent XSS attacks when rendering user input.

## Git Branches

This project showcases two development approaches in different Git branches to compare coding techniques:

1.  **Basic Loop Rendering Branch**:
    -   This approach clears the `innerHTML` and uses a `forEach` loop to re-render the entire list every time a change (add/delete) occurs.
    -   **Pros**: The code is concise, easy to understand, and great for beginners.

2.  **Optimized DOM Manipulation Branch**:
    -   Improves performance by adding a unique `id` (using `Date.now()`) to each `<li>` element.
    -   When a change is made, it uses the DOM API to directly target and manipulate only the specific element involved, avoiding a complete re-render of the list.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- A modern web browser (Chrome, Firefox, Edge, Safari).

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/kawisarafordev/Javascript-Todo-List.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-list
   ```

3. Open `index.html` in your web browser.

## Usage

Type your task into the input field and click the "Add" button or press `Enter`. Click on the task text to mark it as completed (strikethrough), or click the "❌" button to delete it.

## Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.