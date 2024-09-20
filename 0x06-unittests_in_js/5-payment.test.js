/* eslint-disable */

// Import required modules
const sinon = require('sinon'); // Sinon for spying
const { expect } = require('chai'); // Chai for assertions
const sendPaymentRequestToApi = require('./5-payment'); // Import the function to test

// Describe the test suite
describe('sendPaymentRequestToApi', function () {
  let consoleSpy; // Declare the spy variable

  // Use beforeEach to set up the spy before each test
  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log');
  });

  // Use afterEach to restore the spy after each test
  afterEach(function () {
    consoleSpy.restore();
  });

  // Test case for the first set of inputs
  it('should log the correct total for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Assert that console.log was called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  // Test case for the second set of inputs
  it('should log the correct total for 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Assert that console.log was called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
