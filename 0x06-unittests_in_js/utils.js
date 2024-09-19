/* eslint-disable */

// Create the Utils module with a calculateNumber function
const Utils = {
  /**
   * Rounds two numbers and performs an
   * operation based on the type provided.
   * @param {string} type - The type of operation
   * ('SUM', 'SUBTRACT', or 'DIVIDE').
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number|string} - The result of the operation,
   * or 'Error' for division by zero.
   */
  calculateNumber: function (type, a, b) {
    // Round the numbers a and b
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    // Perform the operation based on the type
    if (type === 'SUM') {
      return roundedA + roundedB;
    } else if (type === 'SUBTRACT') {
      return roundedA - roundedB;
    } else if (type === 'DIVIDE') {
      // Handle division and check for division by zero
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    }
    return 0;
  }
};

// Export the Utils module
module.exports = Utils;
