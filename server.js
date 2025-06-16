// Import required modules
const express = require("express");
const { database } = require("./database.js");

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Define routes
app.get("/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to my Node.js server! Try the /hello endpoint.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Import the database

// Middleware for parsing JSON bodies
app.use(express.json());

// Get all users
app.get("/users", (req, res) => {
  const users_database = database.users;
  if (!users_database || users_database.length === 0) {
    return res.status(404).json({ error: "No users found" });
  }
  res.json(users_database);
});

// Get user by ID
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const users_database = database.users;
  const user = users_database.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

// Create a new user
app.post("/users", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }
});

// Update a user
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { username, email, password } = req.body;
  const users_database = database.users;

  const userIndex = users_database.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const updatedUser = { ...users_database[userIndex], username, email, password };
  users_database[userIndex] = updatedUser;

  res.json({ message: "User updated successfully", user: updatedUser });
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const users_database = database.users;

  const userIndex = users_database.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users_database.splice(userIndex, 1);
  res.json({ message: "User deleted successfully" });
});
