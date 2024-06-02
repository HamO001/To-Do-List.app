const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let tasks = []; // In-memory task storage
let nextId = 1; // Simple task ID generator

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        const newTask = {
            id: nextId++, // Assign a unique ID to the task
            title: inputBox.value,
            completed: false
        };

        // Add the task to the in-memory storage
        tasks.push(newTask);

        // Create and display the task
        let li = document.createElement('li');
        li.textContent = newTask.title;
        li.dataset.id = newTask.id; // Store the task ID in a data attribute

        // Create a delete button
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = "";

        // Add event listener to the new task
        li.addEventListener("click", toggleTask);
    }
}

// Toggle task completion status
function toggleTask(event) {
    const taskElement = event.target;
    if (taskElement.tagName === "LI") {
        taskElement.classList.toggle("checked");

        // Find the task in the in-memory storage and update its completed status
        const taskId = Number(taskElement.dataset.id);
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
        }
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        const taskElement = e.target.parentElement;
        const taskId = Number(taskElement.dataset.id);

        // Remove the task from the in-memory storage
        tasks = tasks.filter(t => t.id !== taskId);

        // Remove the task from the DOM
        taskElement.remove();
    }
});

function showTask() {
    // Clear the current task list
    listContainer.innerHTML = '';

    // Display tasks from the in-memory storage
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.textContent = task.title;
        li.dataset.id = task.id; // Store the task ID in a data attribute

        if (task.completed) {
            li.classList.add('checked');
        }

        // Create a delete button
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);

        // Add event listener to the new task
        li.addEventListener("click", toggleTask);
    });
}

showTask();
