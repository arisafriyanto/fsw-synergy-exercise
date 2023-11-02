let tasks = [];
let mode = "save";
let selectedTask = null;

const formInputTask = document.getElementById("formInputTask");
const inputTask = document.getElementById("task");
const taskList = document.getElementById("taskList");

function validateForm() {
  if (inputTask.value === "") {
    alert("Input task is required!");
    return false;
  }

  return true;
}

function submitFormInputTask(e) {
  e.preventDefault();
  if (validateForm()) {
    if (selectedTask && selectedTask.id && mode === "update") {
      updateTask({ ...selectedTask, name: inputTask.value });
      return;
    }

    addTask(inputTask.value);
  }
}

function addTask(taskValue) {
  let id = tasks.length + 1;
  tasks.push({ id, name: taskValue });
  inputTask.value = "";

  displayTasks(tasks);
}

function updateTask(selectedTask) {
  const newTask = [...tasks].map((item) => {
    if (item.id === selectedTask.id) {
      return {
        ...item,
        name: selectedTask.name,
      };
    }

    return { ...item };
  });

  tasks = newTask;
  inputTask.value = "";
  mode = "save";
  displayTasks(tasks);
}

function handleRemove(id) {
  tasks = [...tasks].filter((item) => item.id !== id);

  displayTasks(tasks);
}

function handleUpdate(id) {
  selectedTask = [...tasks].find((item) => item.id === id);
  inputTask.value = selectedTask.name;
  mode = "update";

  // console.log(selectedTask);
  // console.log(mode);
}

function displayTasks(tasks) {
  const taskElements = [...tasks]
    .map(
      (item) => `
        <li>
            <div>
                <span>${item.name}</span>
                <button type="button" onclick="handleRemove(${item.id})">remove</button>
                <button type="button" onclick="handleUpdate(${item.id})">update</button>
            </div>
        </li>
    `
    )
    .join("");
  taskList.innerHTML = taskElements;
}

addTask("Belajar");
addTask("Makan");
addTask("Minum");
addTask("Tidur");

displayTasks(tasks);

formInputTask.addEventListener("submit", submitFormInputTask);
