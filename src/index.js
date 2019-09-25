document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('form').addEventListener('submit', submitForm);
  loadTasks()
});

function submitForm(e) {
  e.preventDefault();

  let description = document.getElementById("new-task-description").value 
  let ul = document.getElementById("tasks")
  ul.innerHTML += `<li>${description}<li>`

  
}

function loadTasks() {
  let ul = document.getElementById("tasks")
  loadTasks.forEach(function(task) {
    ul.innerHTML += `<li>${task.description}<li>`
  })
}
