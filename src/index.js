document.addEventListener("DOMContentLoaded", () => {
  //This function adds a new task
  function addNewTask(event) {
    //this prevents the form from firing its http method
    event.preventDefault()
    //Get our tasklist ul
    const taskList = document.querySelector("ul#tasks")
    //Get the value of our task description input text box
    const newTaskInput = document.querySelector("#new-task-description")
    //create a new li that I will add eventually to my taskList ul
    const li = document.createElement("li")
    // Set my li's text content to my newTaskInput value and give it an extra space for buffer
    li.textContent = newTaskInput.value + " "

    //create my delete button for the task
    const completeButton = document.createElement("button")
    //give my delete button a handy "x"
    completeButton.textContent = "x"

    //add the all important event listener for this button so I can delete it later. 
    completeButton.addEventListener("click", deleteTask)

    //append my completebutton button element to my li element
    li.appendChild(completeButton)
    //append my li to my taskList element
    taskList.appendChild(li)
  }

  function deleteTask(event) {
    event.currentTarget.parentElement.remove()
  }

  const form = document.querySelector("form")
  form.addEventListener("submit", addNewTask)
  
});
