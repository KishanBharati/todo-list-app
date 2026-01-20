// Selecting required elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks when page loads
window.onload = loadTasks;

// Function to add a task
function addTask() {

    // Get input value
    const taskText = taskInput.value.trim();

    // Validation for empty task
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create span for text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Checkbox change event
    checkbox.onchange = () => {
        span.classList.toggle("completed");
        saveTasks();
    };

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
        const newTask = prompt("Edit task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask;
            saveTasks();
        }
    };

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
        li.remove();
        saveTasks();
    };

    // Append elements
    li.append(checkbox, span, editBtn, deleteBtn);
    taskList.appendChild(li);

    // Save tasks
    saveTasks();

    // Clear input
    taskInput.value = "";
}

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

// Load tasks from local storage
function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}

