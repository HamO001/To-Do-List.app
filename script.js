const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const API_URL = 'https://665cc4c83e4ac90a04da9651.mockapi.io/:endpoint'; //  mock API

function addTask() {
    if (inputBox.value === '') {
        alert("Please enter a task!");
    } else {
        const newTask = {
            title: inputBox.value,
            completed: false
        };

        // POST request to add the task
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(response => response.json())
        .then(task => {
            let li = document.createElement('li');
            li.textContent = task.title;

            // Create a delete button
            let span = document.createElement("span");
            span.textContent = "\u00d7";
            li.appendChild(span);

            listContainer.appendChild(li);
            inputBox.value = "";

            // Add event listener to the new task
            li.addEventListener("click", toggleTask);
        })
        .catch(error => console.error('Error:', error));
    }
}

// Toggle task completion status
function toggleTask(event) {
    const task = event.target;
    if (task.tagName === "LI") {
        task.classList.toggle("checked");
        // Normally, you'd make an API call here to update the task status
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        // Normally, you'd make an API call here to delete the task
    }
});

function showTask() {
    // GET request to retrieve tasks
    fetch(API_URL)
        .then(response => response.json())
        .then(tasks => {
            listContainer.innerHTML = '';
            tasks.forEach(task => {
                let li = document.createElement('li');
                li.textContent = task.title;

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
        })
        .catch(error => console.error('Error:', error));
}

showTask();
