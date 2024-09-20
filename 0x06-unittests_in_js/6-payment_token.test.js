/* eslint-disable */

// Import required modules
const { expect } = require('chai'); // Chai for assertions
const getPaymentTokenFromAPI = require('./6-payment_token'); // Import the function to test

// Describe the test suite
describe('getPaymentTokenFromAPI', function () {
  // Test case for the successful promise resolution
  it('should resolve to {data: "Successful response from the API"} when success is true', function (done) {
    // Call the function with success = true
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assert that the resolved value is correct
        expect(response).to.eql({ data: 'Successful response from the API' });
        done(); // Call done to indicate the test is complete
      })
      .catch(done); // If there's an error, pass it to done
  });
});
