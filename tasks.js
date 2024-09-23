// To-Do list

let tasks = [];

//Function to create a new task
function addTask() {
  let newTask = document.getElementById('new-task').value;
  if (newTask !== '') {
    tasks.push(newTask);
    localStorage.setItem('task', JSON.stringify(tasks));
    document.getElementById('new-task').value = '';
  } else {
    alert('Please add a new task');
  }
  showTasks();
}


function markTasks(index, text) {
  if (index.checked) {
    text.style.textDecoration = 'line-through';
  } else {
    text.style.textDecoration = 'none';
  }
}

//Function to remove from localStorage
function deleteTask(elem) {
  const tasksList = localStorage.getItem('task');
  const tasksArray = JSON.parse(tasksList);

  for (let i = 0; i < tasksArray.length; i++) {
    if (i == elem) {
      tasksArray.splice(i, 1);
    }
    tasks = tasksArray;
    localStorage.setItem('task', JSON.stringify(tasks));
  }
 showTasks();
}

//Function to display a list of tasks
function showTasks() {
  const listItemDiv = document.getElementById('task-list');
  listItemDiv.innerHTML = '';
  const taskList = localStorage.getItem('task');
  if (taskList) {
    const tasksItem = JSON.parse(taskList);

    for (let i = 0; i < tasksItem.length; i++) {
      const taskDiv = document.createElement('div');
      taskDiv.setAttribute('class', 'task-div');

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.setAttribute('class', 'task-checkbox');
      checkBox.setAttribute('id', 'checkbox-' + i);

      const task = document.createElement('li');
      task.textContent = tasksItem[i];
      task.setAttribute('id', 'task-' + i);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'DELETE';
      deleteBtn.setAttribute('class', 'delete-btn');

      taskDiv.appendChild(checkBox);
      taskDiv.appendChild(task);
      taskDiv.appendChild(deleteBtn);
      listItemDiv.appendChild(taskDiv);

      checkBox.addEventListener('click', () => {
        markTasks(checkBox, task, i);
      });

      deleteBtn.addEventListener('click', () => {deleteTask(i)});
    }
  }
}

showTasks();
