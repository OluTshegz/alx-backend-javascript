/* eslint-disable */

// Import the http and fs modules
const http = require('http');
const fs = require('fs');

// Function to count students asynchronously
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip the header line

      const fields = {};
      students.forEach((student) => {
        const [firstname, lastname, age, field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      let output = `Number of students: ${students.length}\n`;
      for (const field in fields) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
      resolve(output.trim());
    });
  });
}

// Create an HTTP server
const app = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    // Handle requests to the root endpoint "/"
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Handle requests to the "/students" endpoint
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    // Get the student data asynchronously
    countStudents(process.argv[2].toString())
    .then((output) => {
      // res.end(`${output}`);
      res.end(output);
    }).catch((error) => {
      // res.end(error.message);
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

// Listen on port 1245
app.listen(1245);

// Export the server
module.exports = app;
