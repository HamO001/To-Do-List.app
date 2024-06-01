const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        const taskText = inputBox.value;
        const li = document.createElement('li');
        li.textContent = taskText;
        listContainer.appendChild(li);
        
        // Save tasks to localStorage
        saveTasks();

        // Clear input box after adding task
        inputBox.value = "";
    }
}

// Function to save tasks to localStorage
function saveTasks() {
    const tasks = Array.from(listContainer.children).map(task => ({
        text: task.textContent.trim()
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        listContainer.appendChild(li);
    });
}

// Event listener for clicking on tasks
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    }
});

// Load tasks from localStorage when the page loads
window.addEventListener("DOMContentLoaded", loadTasks);
