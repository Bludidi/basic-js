// To-Do list

let tasks = [];

//Function to create a new task
function addTask() {
  let newTask = document.getElementById('new-task').value;
  if (newTask !== '') {
    tasks.push(newTask);
    document.getElementById('new-task').value = "";
    showTasks();
  } else {
    alert('Please add a new task');
  }
};

//Function to delete a task for the list of tasks
function removeTask(task) {
  tasks.splice(task, 1);
      showTasks();
}

//Function to display a list of tasks
function showTasks() {
  const listItemDiv = document.getElementById('task-list');
  listItemDiv.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const task = document.createElement('li');
    task.textContent = tasks[i];

    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Remove task';
    deleteTask.addEventListener('click', () => removeTask(i));
    listItemDiv.appendChild(task);
    listItemDiv.appendChild(deleteTask);
  }
}
