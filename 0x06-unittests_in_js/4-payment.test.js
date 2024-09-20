/* eslint-disable */

// Import required modules
const sinon = require('sinon'); // Sinon for stubbing
const { expect } = require('chai'); // Chai for assertions
const Utils = require('./utils'); // Import the Utils module
const sendPaymentRequestToApi = require('./4-payment'); // Import the function to test

// Describe the test suite
describe('sendPaymentRequestToApi', function () {
  // Test case to ensure that Utils.calculateNumber is stubbed correctly
  it('should stub Utils.calculateNumber and log the correct message', function () {
    // Create a stub for Utils.calculateNumber that always returns 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy on console.log to verify what gets logged
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function being tested
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub was called once with 'SUM', 100, and 20
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that console.log was called once with the correct message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the original functions to avoid side effects
    stub.restore();
    consoleSpy.restore();
  });
});
