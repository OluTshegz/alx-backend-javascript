/* eslint-disable */

// Import the assert module from Node.js to perform assertions
const assert = require('assert');

const {it, describe} = require('mocha');

// Import the function to be tested from the 0-calcul.js file
const calculateNumber = require('./0-calcul.js');

// Define the test suite for the calculateNumber function
describe('calculateNumber', () => {
  // Test case 1: Verify if rounding 1 and 3 results in the correct sum
  it('should return 4 when inputs are 1 and 3', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  // Test case 2: Verify rounding when one number has a decimal
  it('should return 5 when inputs are 1 and 3.7', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  // Test case 3: Verify rounding of both numbers with decimals
  it('should return 5 when inputs are 1.2 and 3.7', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  // Test case 4: Verify rounding when rounding leads to higher values
  it('should return 6 when inputs are 1.5 and 3.7', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('checking negative return value', () => {
    assert.equal(calculateNumber(-1.3, -3.7), -5);
  });
});
