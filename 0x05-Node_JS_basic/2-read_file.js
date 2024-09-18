/* eslint-disable */

// Import the fs (file system) module for reading files
const fs = require('fs');

// Function to count students by reading from a CSV file synchronously
function countStudents(path) {
  try {
    // Read the file synchronously and convert it to string
    const data = fs.readFileSync(path, 'utf-8').toString();

    // Split the file content by newlines to get individual lines
    const lines = data.split('\n');

    // Filter out empty lines from the CSV
    const validLines = lines.filter((line) => line.trim() !== '');

    // Remove the first line (header) from the valid lines
    const students = validLines.slice(1);

    // If no students are found, throw an error
    if (students.length === 0) throw new Error('Cannot load the database');

    // Log the total number of students
    console.log(`Number of students: ${students.length}`);

    // Object to store the count and list of students by field
    const fields = {};

    students.forEach((student) => {
      // Split each line by commas to get student data
      const [firstname, lastname, age, field] = student.split(',');

      // Initialize the field in the object if not present
      if (!fields[field]) {
        fields[field] = [];
      }

      // Add the student's first name to the respective field
      fields[field].push(firstname);
    });

    // Log the number of students and their names in each field
    for (const field in fields) {
      const studentList = fields[field];
      console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  } catch (error) {
    // If there is an error (like file not found), throw a custom error message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
