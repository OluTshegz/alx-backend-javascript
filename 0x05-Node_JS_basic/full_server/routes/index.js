/* eslint-disable */

import { Router } from 'express'; // Import express router
import AppController from '../controllers/AppController'; // Import AppController
import StudentsController from '../controllers/StudentsController'; // Import StudentsController

const router = Router(); // Create a new router instance

// Define the route for the homepage
router.get('/', AppController.getHomepage);

// Define the route for listing all students
router.get('/students', StudentsController.getAllStudents);

// Define the route for listing students by major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router; // Export the router
