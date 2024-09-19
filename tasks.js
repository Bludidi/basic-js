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
  const taskList = localStorage.getItem('task');
    const tasksItem = JSON.parse(taskList);
  tasksItem.splice(taskIndex, 1);
  //showTasks();
}

//Function to display a list of tasks
function showTasks() {
  const listItemDiv = document.getElementById('task-list');
 listItemDiv.innerHTML = '';
  const taskList = localStorage.getItem('task');
  if(taskList) {
    const tasksItem = JSON.parse(taskList);
  

  for (let i = 0; i < tasksItem.length; i++) {
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'task-div');
    
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    
    const task = document.createElement('li');
    task.textContent = tasksItem[i];

    const deleteTask = document.createElement('button');
    deleteTask.textContent = 'Delete';
    deleteTask.setAttribute('class', 'delete-btn');    
    /* deleteTask.addEventListener('click', (item) => {
       tasksItem.splice(item, 1);
    }); */
    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(task);
    taskDiv.appendChild(deleteTask);
    listItemDiv.appendChild(taskDiv);
  }
} else {
  alert("No Tasks available");
}
}

showTasks();
