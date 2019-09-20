document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector("#create-task-form")

  let taskDescription = document.querySelector('#new-task-description')

  let ulTasks = document.querySelector("#tasks")


  form.addEventListener("submit", addTask)

  function addTask(event){
    event.preventDefault()
    let newLi = document.createElement('li')
    newLi.textContent = taskDescription.value
    let taskPriority = document.querySelector("#priority").value
    newLi.style.color = taskPriority  
    let deleteButton = document.createElement('button')
    deleteButton.innerText = "X"
    newLi.appendChild(deleteButton)
    deleteButton.addEventListener('click', deleteTask)
    ulTasks.appendChild(newLi)
  }

  function deleteTask(event){
    event.currentTarget.parentElement.remove()
  }

  document.getElementById("new-task-description").innerHTML += "sorry charlie, you can't do this!";
  event.preventDefault()
});
