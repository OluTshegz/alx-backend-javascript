/* eslint-disable */

// Import the expect function from Chai
const { expect } = require('chai');

// Import the function to be tested
const calculateNumber = require('./2-calcul_chai.js');

// Define the test suite for the calculateNumber function
describe('calculateNumber', () => {
  // Test case 1: Verify SUM operation using Chai expect
  it('should return 6 for SUM when inputs are 1.4 and 4.5', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  // Test case 2: Verify SUBTRACT operation
  it('should return -4 for SUBTRACT when inputs are 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  // Test case 3: Verify DIVIDE operation
  it('should return 0.2 for DIVIDE when inputs are 1.4 and 4.5', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  // Test case 4: Verify DIVIDE by zero returns Error
  it('should return "Error" for DIVIDE when divisor rounds to 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
