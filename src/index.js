document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const tasksList = document.getElementById("tasks");

  addTaskBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      tasksList.appendChild(taskItem);

      taskInput.value = "";
    }
  });

  // your code here
});
