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

// Add a new route with route parameter `id` that only accepts numbers using regex
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id; // Extract the cart ID from the route parameter
  res.send(`Payment methods for cart ${id}`); // Send response with the cart ID
});

// If the `id` is not a number, Express will handle it and return a 404 by default

// Add a new GET route that returns available payment methods in a JSON format
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods); // Send the JSON object as a response
});

// Add a new POST route to handle user login
app.post('/login', express.json(), (req, res) => {
  const { userName } = req.body; // Extract `userName` from the request body
  res.send(`Welcome ${userName}`); // Send personalized welcome message
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log message to console once the server is up
  console.log(`API available on localhost port ${PORT}`);
});

// Export the app object for testing purposes
module.exports = app;
