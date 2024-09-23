/* eslint-disable */

import readDatabase from '../utils'; // Import the readDatabase function

// Define and export the StudentsController class
export default class StudentsController {
  // Static method to handle /students route
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2]; // Get database file path from command line
    // Call readDatabase with the database file
    readDatabase(databaseFile).then((studentsByField) => {
      let response = 'This is the list of our students\n';

      // Sort fields alphabetically and build the response
      Object.keys(studentsByField).sort().forEach((field) => {
        response += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      });

      // Send the response with 200 status
      res.status(200).send(response.trim());
    }).catch(() => {
      // Send 500 status with error if there's an issue loading the database
      res.status(500).send('Cannot load the database');
    });
  }

  // Static method to handle /students/:major route
  static getAllStudentsByMajor(req, res) {
    const major = req.params.major; // Get major from URL parameters
    const databaseFile = process.argv[2]; // Get database file path from command line

    // Check if the major is either CS or SWE
    if (major !== 'CS' && major !== 'SWE') {
      // Send a 500 error if the major is invalid
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Call readDatabase with the database file
    readDatabase(databaseFile).then((studentsByField) => {
      const students = studentsByField[major] || []; // Get students of the specified major
      // Send the response with 200 status and the list of students
      res.status(200).send(`List: ${students.join(', ')}`);
    }).catch(() => {
      // Send 500 status with error if there's an issue loading the database
      res.status(500).send('Cannot load the database');
    });
  }
}
