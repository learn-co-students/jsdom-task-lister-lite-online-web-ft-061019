document.addEventListener("DOMContentLoaded", () => {
  getTaskForm().addEventListener('submit', submitForm);
});

const getTaskDescription = () => document.getElementById('new-task-description');
const getTaskForm = () => document.querySelector('form');
const getTasksUl = () => document.querySelector('ul');
const getPriority = () => document.querySelector('#priority');
let tasks = [];
let ids = 0;

const submitForm = e => {
  e.preventDefault();

  const taskObj = {
    id: ++ids,
    description: getTaskDescription().value,
    priority: getPriority().value
  }

  tasks.push(taskObj);

  displayTasks();
}

const displayTasks = () => {
  getTasksUl().innerHTML = '';
  sortPriority().forEach(task => displayTask(task))
}

const displayTask = (task) => {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.className = 'button'
  button.innerText = 'Remove Task'
  button.addEventListener('click', removeTask);
  li.style.backgroundColor = setColor(task);
  li.id = task.id;
  li.innerHTML = `${task.description} - `
  li.appendChild(button);
  getTasksUl().appendChild(li);
}

const setColor = task => {
  switch(task.priority) {
    case "high":
      return "red";
    case "medium":
      return "yellow"
    case "low":
      return "green";
  }
}

const removeTask = (e) => {
  const id = e.target.parentNode.id;
  e.target.parentNode.remove();
  tasks = tasks.filter(task => task.id != id);
}

const sortPriority = () => {
  const highPriority = tasks.filter(task => task.priority === "high")
  const medPriority = tasks.filter(task => task.priority === "medium")
  const lowPriority = tasks.filter(task => task.priority === "low")
  return [...highPriority, ...medPriority, ...lowPriority];
}