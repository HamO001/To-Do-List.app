const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const API_URL = 'https://665cc4c83e4ac90a04da9651.mockapi.io/:endpoint'; // MockAPI URL

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        const newTask = {
            title: inputBox.value,
            completed: false
        };

        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(response => response.json())
        .then(task => {
            displayTask(task);
            inputBox.value = "";
        })
        .catch(error => console.error('Error:', error));
    }
}

function displayTask(task) {
    let li = document.createElement('li');
    li.textContent = task.title;
    li.dataset.id = task.id;

    if (task.completed) {
        li.classList.add('checked');
    }

    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    listContainer.appendChild(li);

    li.addEventListener("click", toggleTask);
}

function toggleTask(event) {
    const taskElement = event.target;
    if (taskElement.tagName === "LI") {
        const taskId = taskElement.dataset.id;
        const completed = !taskElement.classList.toggle("checked");

        fetch(`${API_URL}/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed })
        })
        .catch(error => console.error('Error:', error));
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        const taskElement = e.target.parentElement;
        const taskId = taskElement.dataset.id;

        fetch(`${API_URL}/${taskId}`, {
            method: 'DELETE'
        })
        .then(() => {
            taskElement.remove();
        })
        .catch(error => console.error('Error:', error));
    }
});

function showTask() {
    fetch(API_URL)
        .then(response => response.json())
        .then(tasks => {
            listContainer.innerHTML = '';
            tasks.forEach(task => displayTask(task));
        })
        .catch(error => console.error('Error:', error));
}

showTask();
