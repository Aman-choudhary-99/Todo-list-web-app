const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const emptyMessage = document.getElementById("empty-message");

// Add new task
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return; // empty input

  addTask(text);
  input.value = "";
  input.focus();
  updateEmptyMessage();
});

function addTask(text) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;

  const btn = document.createElement("button");
  btn.className = "delete-btn";
  btn.textContent = "Delete";

  // Delete task on click
  btn.addEventListener("click", function () {
    li.remove();
    updateEmptyMessage();
  });

  li.appendChild(span);
  li.appendChild(btn);
  list.appendChild(li);
}

function updateEmptyMessage() {
  if (list.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

// Initial state
updateEmptyMessage();