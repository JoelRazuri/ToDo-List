const d = document;

const date = d.querySelector("#date"),
      list = d.querySelector("#list"),
      inputTask = d.querySelector("#input-task"),
      buttonEnter = d.querySelector("#enter");

const check = "fa-check-circle",
      uncheck = "fa-circle",
      lineThrough = "line-through";

const tasksList = [];

let id = 0;


// función fecha
const DATE = new Date();
date.innerHTML = DATE.toLocaleDateString("es-AR", {weekday:"long",month:"short", day:"numeric"});

// función agregar tarea
function addTask(task, id, done, deleted) {
    
    if (deleted) return;

    const Done = done ? check : uncheck;
    const line = done ? lineThrough : "";

    const element = `<li>
                        <i class="far ${Done}" data="realizado" id="${id}"></i>
                        <p class="text ${line}">${task}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
                     </li>`;

    list.insertAdjacentHTML("beforeend", element);
}


// función de tarea realizada
function taskDone(element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(lineThrough);
    tasksList[element.id].done = tasksList[element.id].done ?false :true;
}

buttonEnter.addEventListener("click", () => {
    const task = inputTask.value;

    if (task) {
        addTask(task, id, false, false);
        tasksList.push({
            name: task,
            id: id,
            done: false,
            deleted: false
        });
    }
    inputTask.value = "";
    id++;
});


// función tarea eliminada
function taskDeleted(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    tasksList[element.id].deleted = true;
}


inputTask.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        const task = inputTask.value;
        if (task) {
            addTask(task, id, false, false);
            tasksList.push({
                name: task,
                id: id,
                done: false,
                deleted: false
            });
        }
        inputTask.value = "";
        id++;
    }
});


list.addEventListener("click", function(event){
    const element = event.target,
          elementData = element.attributes.data.value;

    if (elementData === "realizado") {
        taskDone(element);
    } else if (elementData === "eliminado") {
        taskDeleted(element);
    }
});