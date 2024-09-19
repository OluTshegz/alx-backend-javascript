/* eslint-disable */

// Import required modules
const sinon = require('sinon'); // Sinon for spying
// import sinon from 'sinon'; // Import sinon for spying
const { expect } = require('chai'); // Chai for assertions
// import { expect } from 'chai'; // Import expect from Chai
const { it, describe } = require('mocha');
// import { describe, it } from 'mocha'; // Mocha for describe and it functions
const Utils = require('./utils.js'); // Import the Utils module
// import * as Utils from './utils.js'; // Import the Utils module
const sendPaymentRequestToApi = require('./3-payment.js'); // Import the function to test
// import sendPaymentRequestToApi from './3-payment.js'; // Import the function to test

// Describe the test suite
describe('sendPaymentRequestToApi', function () {
  // Test case to ensure that Utils.calculateNumber is called correctly
  it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
    // Create a spy on Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function being tested
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called once with 'SUM', 100, and 20
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the original function to avoid side effects
    spy.restore();
  });
});
