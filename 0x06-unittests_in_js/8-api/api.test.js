// Import necessary modules: chai for assertions
// and request to make HTTP requests to the server
const chai = require('chai');
const request = require('request');
const expect = chai.expect; // Extract 'expect' for assertions

// Test suite for the index page
describe('Index page', () => {
  // Test case: Checking the status code of the root route
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      // Expect the status code to be 200 (OK)
      expect(response.statusCode).to.equal(200);
      done(); // Call done when the test finishes
    });
  });

  // Test case: Checking the correct result (response body)
  it('Correct result?', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      // Expect the response to be the welcome message
      expect(body).to.equal('Welcome to the payment system');
      done(); // Call done when the test finishes
    });
  });
});
