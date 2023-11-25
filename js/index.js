const d = document;

const date = d.querySelector("#date"),
      list = d.querySelector("#list"),
      inputTask = d.querySelector("#input-task"),
      buttonEnter = d.querySelector("#enter");

// funcion agregar tarea
function addTask(task) {
    const element = `<li>
                        <i class="far fa-circle co" data="realizado" id="0"></i>
                        <p class="text">${task}</p>
                        <i class="fas fa-trash de" data="eliminado" id="0"></i>
                     </li>`;

    list.insertAdjacentHTML("beforeend", element);
}


buttonEnter.addEventListener("click", () => {
    const task = inputTask.value;

    if (task) {
        addTask(task);
    }
    inputTask.value = "";
});


inputTask.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        const task = inputTask.value;
        if (task) {
            addTask(task);
        }
        inputTask.value = "";
    }
});