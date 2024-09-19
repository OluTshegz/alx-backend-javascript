/* eslint-disable */

// Define and export the AppController class
export default class AppController {
  // Static method for handling the homepage route
  static getHomepage(req, res) {
    // Send a 200 status and a plain text message
    res.status(200).send('Hello Holberton School!');
  }
}
