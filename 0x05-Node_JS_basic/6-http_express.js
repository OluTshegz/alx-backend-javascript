// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route handler for the root ("/") endpoint
app.get('/', (req, res) => {
  // Send a plain text response with "Hello Holberton School!"
  res.send('Hello Holberton School!');
});

// Make the app listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app so it can be used elsewhere
module.exports = app;
