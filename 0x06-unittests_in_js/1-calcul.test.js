/* eslint-disable */

// Import the assert module for assertions
const assert = require('assert');

// Import the function to be tested
const calculateNumber = require('./1-calcul.js');

// Define the test suite for the calculateNumber function
describe('calculateNumber', () => {
  // Test case 1: Verify SUM operation
  it('should return 6 for SUM when inputs are 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  // Test case 2: Verify SUBTRACT operation
  it('should return -4 for SUBTRACT when inputs are 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  // Test case 3: Verify DIVIDE operation
  it('should return 0.2 for DIVIDE when inputs are 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  // Test case 4: Verify DIVIDE by zero returns Error
  it('should return "Error" for DIVIDE when divisor rounds to 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
