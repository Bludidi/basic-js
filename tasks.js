// To-Do list

let tasks = [];

//Function to create a new task
function addTask() {
  const  newTask = document.getElementById('new-task').value;
const taskItem = {"task": newTask, "isDone": false, }
  if (newTask !== '') {
    const taskList = JSON.parse(localStorage.getItem('task'));
    if (taskList) {
      tasks = taskList
    }
    tasks.push(taskItem);
    localStorage.setItem('task', JSON.stringify(tasks));
    document.getElementById('new-task').value = '';
  } else {
    alert('Please add a new task');
  }
  showTasks();
}

//Function to track and update status of checkbox 
function markTasks(checkBox, text, index) {
  const taskList = JSON.parse(localStorage.getItem('task'));
  if (checkBox.checked) {
    let checked = taskList[index].isDone = true;
    if (checked) {
    text.style.textDecoration = 'line-through';
    }   
   
  } else {
    text.style.textDecoration = 'none';
    taskList[index].isDone = false;
  }
  localStorage.setItem('task', JSON.stringify(taskList));
}

//Function to remove task from localStorage
function deleteTask(elem) {
  const tasksArray = JSON.parse(localStorage.getItem('task'));

  for (let i = 0; i < tasksArray.length; i++) {
    if (i == elem) {
      tasksArray.splice(i, 1);
    }
    tasks = tasksArray;
    localStorage.setItem('task', JSON.stringify(tasks));
  }
 showTasks();
}


//Function to display tasks in the UI
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
      task.textContent = tasksItem[i].task;
      task.setAttribute('id', 'task-' + i);

    if(tasksItem[i].isDone == true) {
      task.style.textDecoration = 'line-through';
      checkBox.checked = true;
    } else {
      task.style.textDecoration = 'none';
    }

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'DELETE';
      deleteBtn.setAttribute('class', 'delete-btn');

      taskDiv.appendChild(checkBox);
      taskDiv.appendChild(task);
      taskDiv.appendChild(deleteBtn);
      listItemDiv.appendChild(taskDiv);

      checkBox.addEventListener('change', () => {
        markTasks(checkBox, task, i);
        
      });
      deleteBtn.addEventListener('click', () => {deleteTask(i)});
    }
  }
}

showTasks();
