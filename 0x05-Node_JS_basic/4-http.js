// Import the http module
const http = require('http');

// Create a server and define its request handler
const app = http.createServer((req, res) => {
  // Set the HTTP header with status 200 and content-type as plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body with the desired message
  res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245);

// Export the app so it can be used elsewhere
module.exports = app;
