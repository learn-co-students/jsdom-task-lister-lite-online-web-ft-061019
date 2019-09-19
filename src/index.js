const newForm = document.getElementById("create-task-form")
const inputField = document.getElementById('new-task-description')

const ul = document.getElementById('tasks')


document.addEventListener("DOMContentLoaded", () => {
  newForm.addEventListener("submit", createTask)
});

function clearForm() {
  document.getElementById('new-task-description').value = ''
}

function createTask(e) {
  e.preventDefault()
  const newTaskItem = document.createElement("li")
  newTaskItem.innerText = inputField.value 

  ul.appendChild(newTaskItem)
  clearForm()
}


