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
    li.textContent = taskText;
    document.querySelector(".task-list").appendChild(li);
    input.value = "";
  }
});
