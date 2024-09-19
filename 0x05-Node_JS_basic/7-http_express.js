/* eslint-disable */

// Import the Express module and the fs module
const express = require('express');
const fs = require('fs');

// Create an instance of an Express application
const app = express();

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

// Define a route handler for the root ("/") endpoint
app.get('/', (req, res) => {
  // Send a plain text response with "Hello Holberton School!"
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Define a route handler for the "/students" endpoint
app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  // Read the student data asynchronously
  countStudents(process.argv[2].toString())
    .then((output) => {
      // Respond with the list of students
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      // Respond with an error message if the database cannot be loaded
      // res.send(error.message);
      res.send('This is the list of our students\nCannot load the database');
    });
});

// Make the app listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
