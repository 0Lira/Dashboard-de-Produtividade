const themeToggle = document.getElementById("theme-toggle");
const addTaskBtn = document.getElementById("add-task");
// carrega estado inicial
document.body.classList.toggle(
  "dark-mode",
  localStorage.getItem("darkMode") === "true",
);
// inicializa texto do toggle
themeToggle.textContent = document.body.classList.contains("dark-mode")
  ? "☀️ Light Mode"
  : "🌙 Dark Mode";
// toggle dark mode
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark);
  themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});
// adicionar tarefa
addTaskBtn.addEventListener("click", () => {
  const input = document.querySelector(".new-task input");
  const taskText = input.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // botões da lista de tarefas
    const concludedBtn = document.createElement("button");
    concludedBtn.textContent = "Concluída ✅";
    concludedBtn.classList.add("concluded-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir ❌";
    deleteBtn.classList.add("delete-btn");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar 🖊️";
    editBtn.classList.add("edit-btn");

    li.appendChild(concludedBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.querySelector(".task-list").appendChild(li);
    input.value = "";
    atualizarContador();
  }
});

// eventos de clique na lista de tarefas
document.querySelector(".task-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("concluded-btn")) {
    const li = e.target.parentElement;
    li.querySelector("span").classList.toggle("concluded");
    atualizarContador();
  } else if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    atualizarContador();
  } else if (e.target.classList.contains("edit-btn")) {
    const li = e.target.parentElement;
    const currentText = li.querySelector("span").textContent;
    const newText = prompt("Edit task:", currentText);
    if (newText !== null) {
      li.querySelector("span").textContent = newText;
    }
  }
});

// contagem de tarefas
function atualizarContador() {
  const tarefas = document.querySelectorAll(".task-list li");
  let pendentes = 0;
  tarefas.forEach((li) => {
    if (!li.querySelector("span").classList.contains("concluded")) {
      pendentes++;
    }
  });
  document.getElementById("task-counter").textContent =
    `Tarefas Pendentes: ${pendentes}`;
}
