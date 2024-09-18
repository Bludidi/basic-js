// To-Do list

let tasks = [];

//Function to create a new task
function addTask() {

  let newTask = document.getElementById('new-task').value;
  if (newTask !== '') {
    tasks.push(newTask);
    localStorage.setItem('task', JSON.stringify(tasks));
    document.getElementById('new-task').value = "";
  } else {
    alert('Please add a new task');
  }
  showTasks();
};

//Function to delete a task for the list of tasks
function removeTask(taskIndex) {
  tasks.splice(taskIndex, 1);
  showTasks();
}

//Function to display a list of tasks
function showTasks() {
  const listItemDiv = document.getElementById('task-list');
 listItemDiv.innerHTML = '';
  const taskList = localStorage.getItem('task');
  console.log(taskList);
  if(taskList) {
    const tasksItem = JSON.parse(taskList);
  

  for (let i = 0; i < tasksItem.length; i++) {
    const task = document.createElement('li');
    task.textContent = tasksItem[i];

    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Remove task';
   // deleteTask.addEventListener('click', () => );
    listItemDiv.appendChild(task);
    listItemDiv.appendChild(deleteTask);
  }
}
}

showTasks();
