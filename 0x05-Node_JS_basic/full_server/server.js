/* eslint-disable */

import express from 'express'; // Import express
import router from './routes/index'; // Import the routes

const app = express(); // Create an instance of an Express app

// Use the imported router for handling routes
app.use('/', router);

// Make the server listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app; // Export the app for external use
