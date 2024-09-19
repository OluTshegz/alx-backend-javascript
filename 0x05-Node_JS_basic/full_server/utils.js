/* eslint-disable */

import fs from 'fs'; // Importing fs to read the file system

// Define and export the readDatabase function
const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    // Use fs.readFile to read the file asynchronously
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        // Reject the promise if there's an error reading the file
        reject(new Error('Cannot load the database'));
      } else {
        // Split the file content by lines and process it
        const lines = data.trim().split('\n');
        const studentsByField = {};

        // Iterate over each line after the first line (header)
        for (let i = 1; i < lines.length; i++) {
          const [firstname, lastname, age, field] = lines[i].split(',');

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          // Add the student's firstname to the field's list
          studentsByField[field].push(firstname);
        }
        // Resolve the promise with the resulting object
        resolve(studentsByField);
      }
    });
  });
};

export default readDatabase;
