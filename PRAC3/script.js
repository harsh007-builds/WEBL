// Grab the HTML elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// 1. Add Task: Attach event listener for user interaction [cite: 74]
addBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Use createElement() to make new HTML elements [cite: 71]
    let li = document.createElement("li");
    let span = document.createElement("span");
    
    // Use innerText to modify the text inside the element dynamically [cite: 73]
    span.innerText = taskText;

    let editBtn = document.createElement("button");
    editBtn.innerText = " Edit ";
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = " Delete ";

    // 2. Edit Task: Modify existing task text [cite: 67]
    editBtn.addEventListener("click", function() {
        let newTask = prompt("Edit your task:", span.innerText);
        if (newTask !== null && newTask.trim() !== "") {
            span.innerText = newTask.trim(); // Updates the text
        }
    });

    // 3. Delete Task: Remove task from the list [cite: 68]
    deleteBtn.addEventListener("click", function() {
        // Use remove() to delete the element from the DOM [cite: 75]
        li.remove(); 
    });

    // Use appendChild() to attach the span and buttons to the list item [cite: 72]
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    
    // Append the whole list item to the unordered list in the DOM [cite: 72]
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = "";
});