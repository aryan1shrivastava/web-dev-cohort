const input = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// const clearBtn = document.createElement("button");
// clearBtn.innerText = "Clear All";
// clearBtn.id = "clear-btn";
// document.body.appendChild(clearBtn); // Append to the body

// Function to add todo
const addTodo = () => {
  const value = input.value.trim(); // Remove extra spaces

  if (value === "") {
    alert("Please enter a todo!"); // Show an alert if input is empty
    return;
  }

  const li = document.createElement("li");
  li.innerText = value;

  const delBtn = document.createElement("button");
  delBtn.innerText = "X";

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  todoList.appendChild(li);
  input.value = "";
};

// Click event for Add button
addBtn.addEventListener("click", addTodo);

// Listen for Enter key press inside the input field
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

// // Click event to remove all todos
// clearBtn.addEventListener("click", () => {
//   todoList.innerHTML = ""; // Clears all todos
// });
