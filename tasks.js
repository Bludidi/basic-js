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

function removeTask(text) {
  text.style.display = 'none';
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

      const deleteTask = document.createElement('button');
      deleteTask.textContent = 'DELETE';
      deleteTask.setAttribute('class', 'delete-btn');

      taskDiv.appendChild(checkBox);
      taskDiv.appendChild(task);
      taskDiv.appendChild(deleteTask);
      listItemDiv.appendChild(taskDiv);

      checkBox.addEventListener('click', () => {
        markTasks(checkBox, task, i);
      });

      deleteTask.addEventListener('click', () => {
        removeTask(taskDiv, i);
      });
    }
  }
}

showTasks();
