const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;

        // Create a delete button
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = "";

        saveData();

        // Add event listener to the new task
        li.addEventListener("click", toggleTask);
    }
}

// Toggle task completion status
function toggleTask(event) {
    const task = event.target;
    if (task.tagName === "LI") {
        task.classList.toggle("checked");
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    // Re-add event listeners to the loaded tasks
    const tasks = listContainer.getElementsByTagName('li');
    Array.from(tasks).forEach(task => {
        task.addEventListener("click", toggleTask);
    });
}
showTask();
