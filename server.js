const express = require("express");

const app = express();

app.use(express.json());

// Dummy Database
let tasks = [];

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Get All Tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Add Task
app.get("/add", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: "Learn Backend",
  };

  tasks.push(newTask);

  res.send("Task Added");
});

// Delete Task
app.get("/delete", (req, res) => {
  tasks.pop();

  res.send("Last Task Deleted");
});

// Start Server
app.listen(5000, () => {
  console.log("Server Started");
});