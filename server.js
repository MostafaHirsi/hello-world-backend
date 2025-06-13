// Import required modules
const express = require('express');

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Define routes
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server! Try the /hello endpoint.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});