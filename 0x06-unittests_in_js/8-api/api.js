// Import the express module to create the app
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port number to listen on
const PORT = 7865;

// Define the root route ('/') that sends a welcome message
app.get('/', (req, res) => {
  // Send response to the client
  res.send('Welcome to the payment system');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log message to console once the server is up
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app object for testing purposes
module.exports = app;
