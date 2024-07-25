document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
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
