const taskInput = document.getElementById("taskInput");
const taskTime = document.getElementById("taskTime");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const taskDateTime = taskTime.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.classList.add("fade-in");

  // Task text container
  const taskTextDiv = document.createElement("div");
  taskTextDiv.classList.add("task-text");
  taskTextDiv.textContent = taskText;

  // Date/time display
  const dateSpan = document.createElement("span");
  dateSpan.classList.add("task-time");

  if (taskDateTime) {
    const dateObj = new Date(taskDateTime);
    // Format date nicely: e.g. May 26, 2025, 14:30
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    dateSpan.textContent = dateObj.toLocaleString(undefined, options);
  } else {
    dateSpan.textContent = "No deadline";
    dateSpan.style.opacity = "0.6";
    dateSpan.style.fontStyle = "italic";
  }

  // Create buttons container
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("todo-buttons");

  // Complete button
  const completeBtn = document.createElement("i");
  completeBtn.classList.add("fas", "fa-check");
  completeBtn.title = "Mark as done";
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Delete button
  const deleteBtn = document.createElement("i");
  deleteBtn.classList.add("fas", "fa-trash");
  deleteBtn.title = "Delete task";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(taskTextDiv);
  li.appendChild(dateSpan);
  li.appendChild(buttonsDiv);

  todoList.appendChild(li);

  // Clear inputs
  taskInput.value = "";
  taskTime.value = "";
});
