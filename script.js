document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click(); // Trigger the click event of the Add Task button
        }
    });
});
